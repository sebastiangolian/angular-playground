import { JphUser, JphUserAddress, JphUserAddressGeo, JphUserCompany } from './../interfaces/jph-user';
export class JphUserModel implements JphUser {
  id = 0;
  name = '';
  username = '';
  email = '';
  address: JphUserAddress = new JphUserAddressModel();
  phone = '';
  website = '';
  company: JphUserCompany = new JphUserCompanyModel();
}

export class JphUserAddressModel implements JphUserAddress {
  street = '';
  suite = '';
  city = '';
  zipcode = '';
  geo: JphUserAddressGeo = new JphUserAddressGeoModel();
}

export class JphUserAddressGeoModel implements JphUserAddressGeo {
  lat = '';
  lng = '';
}

export class JphUserCompanyModel implements JphUserCompany {
  name = '';
  catchPhrase = '';
  bs = '';
}
