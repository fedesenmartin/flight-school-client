// src/graphql/mutations.js

import { gql } from '@apollo/client';

export const CREATE_FLIGHT_RECORD = gql`
  mutation CreateFlightRecord($data: FlightRecordInput!) {
    createFlightRecord(data: $data) {
      data {
        id
        type
        instructor
        date
        hours
        paid
        paid_iv
        arrival_time
        departure_time
        arrival_airport
        departure_airport
        plane
        pilot
      }
    }
  }
`;

export const UPDATE_FLIGHT_RECORD = gql`
  mutation CreateFlightRecord($data: FlightRecordInput!) {
    createFlightRecord(data: $data) {
      data {
        id
        type
        instructor
        date
        hours
        paid
        paid_iv
        arrival_time
        departure_time
        arrival_airport
        departure_airport
        plane
        pilot
      }
    }
  }
`;

export const CREATE_PILOT = gql`
     mutation createPilot($input:PilotInput!){
        createPilot(data:$input){
        data{
        attributes{
            name
        }
        }
    }
    }
`;