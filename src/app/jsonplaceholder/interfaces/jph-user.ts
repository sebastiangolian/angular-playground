export interface JphUser {
    id: number
    name: string
    username: string
    email: string
    address: JphUserAddress
    phone: string
    website: string
    company: JphUserCompany
}

export interface JphUserAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: JphUserAddressGeo
}

export interface JphUserAddressGeo {
    lat: string
    lng: string
}

export interface JphUserCompany {
    name: string
    catchPhrase: string
    bs: string
}
