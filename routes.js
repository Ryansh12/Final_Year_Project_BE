const routes = require( 'next-routes' )

module.exports = routes()
.add('index')
.add('App', '/App')
.add('InsuranceOwner', '/InsuranceOwner')
.add('DoctorPage','/DoctorPage')
.add('PatientHomePage','/PatientHomePage')
.add('MedicalRecordForm', '/MedicalRecordForm')
.add('OwnerHomePage','/OwnerHomePage')