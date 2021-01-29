import { JphUser, JphUserAddress, JphUserAddressGeo, JphUserCompany } from './../interfaces/jph-user';
export class JphUserModel implements JphUser {
    id: number = 0
    name: string = ''
    username: string = ''
    email: string = ''
    address: JphUserAddress = new JphUserAddressModel()
    phone: string = ''
    website: string = ''
    company: JphUserCompany = new JphUserCompanyModel()
}

export class JphUserAddressModel implements JphUserAddress {
    street: string = ''
    suite: string = ''
    city: string = ''
    zipcode: string = ''
    geo: JphUserAddressGeo = new JphUserAddressGeoModel()
}

export class JphUserAddressGeoModel implements JphUserAddressGeo {
    lat: string = ''
    lng: string = ''
}

export class JphUserCompanyModel implements JphUserCompany {
    name: string = ''
    catchPhrase: string = ''
    bs: string = ''
}
