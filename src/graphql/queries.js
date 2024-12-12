import { gql } from '@apollo/client';

export const GET_FLIGHT_RECORDS = gql`
  query q {
    flightRecords(pagination: { limit: 100 }) {
      data {
        id
        attributes {
          type
          instructor {
            data {
              attributes {
                name
              }
            }
          }
          date
          hours
          paid
          paid_iv
          arrival_time
          departure_time
          arrival_airport {
            data {
              attributes {
                code
              }
            }
          }
          departure_airport {
            data {
              attributes {
                code
              }
            }
          }
          plane {
            data {
              attributes {
                code
              }
            }
          }
          pilot {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PILOTS = gql`
  query GetPilotsBalance {
    listPilotsBalance {
      balance {
        total_balance
        detail {
          planeCode
          balance
        }
      }
      pilot {
        attributes {
          name
          document
          licence_type
          phone_number
          email
          medical_aptitude
        }
      }
    }
  }
`;


export const GET_PILOTS_NAME = gql`
query listPilotsName{
    pilots(pagination: { limit: 500 }) {
    data{
      attributes{
        name
      }
    }
  }
}
`;


export const GET_PLANES = gql`
query listPlanes{
   planes{
    data{
    	attributes{
        code
      }
    }
  }
}
`;

export const GET_AIRPORTS = gql`
query listAirports{
   airports(pagination: { limit: 500 }){
    data{
    	attributes{
        name
        code
      }
    }
  }
}
`;

