// To parse this data:
//
//   import { Convert, CategoryList } from "./file";
//import { Form } from 'react-bootstrap';

//   const categoryList = Convert.toCategoryList(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
//  From
//{"categories":[{"image":"imagee","name":"Grocery & Staples","subcategories":["Pulses","Atta & Other Flours","Rice & Other Grains","Dry Fruits & Nuts","Edible Oils","Ghee & Vanaspati","Spices","Salt & Sugar","Organic Staples"]},{"image":"imagee","name":"Personal Care","subcategories":["Safety Must Haves","Bath & Body","Hair Care","Skin Care","Oral Care","Fragrances","Face Care","Feminine Hygiene","Men's Grooming","Health And Wellness","Cosmetics"]},{"image":"imagee","name":"Biscuits, Snacks & Chocolates","subcategories":["Chocolates & Candies","Namkeen & Snacks","Chips & Crisps","Sweets","Biscuits & Chocolates Offers Cold Drinks","Juices & Drinks","Tea & Coffee","Health & Energy Drinks","Water & Soda","Milk Drinks"]},{"image":"imagee","name":"Household Items","subcategories":["Household Best Offers","Laundry Detergents","Dishwashers","Cleaners","Repellents","Pooja Needs","Home & Car Fresheners","Tissues & Disposables","Shoe Care","Disinfectants"]}]}
export interface ModelCategoryList {
    categories: ModelCategory[]
}

export interface ModelCategory {
    subcategories: string[]
    image: string
    name: string
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toCategoryList(json: string): ModelCategoryList {
        return cast(JSON.parse(json), r("CategoryList"))
    }

    public static categoryListToJson(value: ModelCategoryList): string {
        return JSON.stringify(uncast(value, r("CategoryList")), null, 2)
    }
}

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`)
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {}
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ })
        typ.jsonToJS = map
    }
    return typ.jsonToJS
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {}
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ })
        typ.jsToJSON = map
    }
    return typ.jsToJSON
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val
        return invalidValue(typ, val)
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length
        for (let i = 0; i < l; i++) {
            const typ = typs[i]
            try {
                return transform(val, typ, getProps)
            } catch (_) { }
        }
        return invalidValue(typs, val)
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val
        return invalidValue(cases, val)
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val)
        return val.map(el => transform(el, typ, getProps))
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null
        }
        const d = new Date(val)
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val)
        }
        return d
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val)
        }
        const result: any = {}
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key]
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined
            result[prop.key] = transform(v, prop.typ, getProps)
        })
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps)
            }
        })
        return result
    }

    if (typ === "any") return val
    if (typ === null) {
        if (val === null) return val
        return invalidValue(typ, val)
    }
    if (typ === false) return invalidValue(typ, val)
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref]
    }
    if (Array.isArray(typ)) return transformEnum(typ, val)
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val)
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val)
    return transformPrimitive(typ, val)
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps)
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps)
}

function a(typ: any) {
    return { arrayItems: typ }
}

function u(...typs: any[]) {
    return { unionMembers: typs }
}

function o(props: any[], additional: any) {
    return { props, additional }
}

function m(additional: any) {
    return { props: [], additional }
}

function r(name: string) {
    return { ref: name }
}

const typeMap: any = {
    "CategoryList": o([
        { json: "categories", js: "categories", typ: a(r("Category")) },
    ], false),
    "Category": o([
        { json: "subcategories", js: "subcategories", typ: a("") },
        { json: "image", js: "image", typ: "" },
        { json: "name", js: "name", typ: "" },
    ], false),
}
