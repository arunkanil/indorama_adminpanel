import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../environments/environment";
import { Apollo, gql } from "apollo-angular";
import { catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { idText } from "typescript";

const FarmDemosQuery = gql`
  query ($page: Int, $pageSize: Int) {
    farmDemos(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Farmer
          FarmLocationLatitude
          FarmLocationLongitude
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          AreaOfField
          isPesticidesUsed
          FarmerPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          IndoramaPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          Images {
            data {
              attributes {
                url
              }
            }
          }
          DateOfHarvesting
          Season
          Status
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const FarmDemoQuery = gql`
  query ($id: ID) {
    farmDemo(id: $id) {
      data {
        id
        attributes {
          Farmer
          FarmLocationLatitude
          FarmLocationLongitude
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          createdAt
          updatedAt
          AreaOfField
          isPesticidesUsed
          DateOfHarvesting
          Season
          FarmerPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          IndoramaPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          Status
          Images {
            data {
              id
              attributes {
                name
                previewUrl
                url
              }
            }
          }
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const AddFarmDemoMutation = gql`
  mutation (
    $farmer: String
    $latitude: Float
    $longitude: Float
    $lga: ID
    $state: ID
    $crop: ID
    $area: String
    $farmerPractise: ComponentFarmDemoFarmDemoPractiseInput
    $indoramaPractise: ComponentFarmDemoFarmDemoPractiseInput
    $dateOfHarvesting: Date
    $season: String
    $Status: ENUM_FARMDEMO_STATUS
    $isPesticidesUsed: Boolean
    $images: [ID]
  ) {
    createFarmDemo(
      data: {
        Farmer: $farmer
        FarmLocationLatitude: $latitude
        FarmLocationLongitude: $longitude
        lgas: $lga
        state: $state
        crop: $crop
        Status: $Status
        AreaOfField: $area
        FarmerPractise: $farmerPractise
        IndoramaPractise: $indoramaPractise
        isPesticidesUsed: $isPesticidesUsed
        DateOfHarvesting: $dateOfHarvesting
        Season: $season
        Images: $images
      }
    ) {
      data {
        id
        attributes {
          Farmer
          FarmLocationLatitude
          FarmLocationLongitude
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Status
          AreaOfField
          isPesticidesUsed
          FarmerPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          IndoramaPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          Images {
            data {
              attributes {
                url
              }
            }
          }
          DateOfHarvesting
          Season
        }
      }
    }
  }
`;
const UpdateFarmDemo = gql`
  mutation (
    $id: ID!
    $farmer: String
    $latitude: Float
    $longitude: Float
    $lga: ID
    $crop: ID
    $area: String
    $farmerPractise: ComponentFarmDemoFarmDemoPractiseInput
    $indoramaPractise: ComponentFarmDemoFarmDemoPractiseInput
    $dateOfHarvesting: Date
    $season: String
    $isPesticidesUsed: Boolean
    $images: [ID]
    $Status: ENUM_FARMDEMO_STATUS
    $state: ID
  ) {
    updateFarmDemo(
      id: $id
      data: {
        Farmer: $farmer
        FarmLocationLatitude: $latitude
        FarmLocationLongitude: $longitude
        lgas: $lga
        crop: $crop
        Status: $Status
        state: $state
        AreaOfField: $area
        FarmerPractise: $farmerPractise
        IndoramaPractise: $indoramaPractise
        isPesticidesUsed: $isPesticidesUsed
        DateOfHarvesting: $dateOfHarvesting
        Season: $season
        Images: $images
      }
    ) {
      data {
        id
        attributes {
          Farmer
          FarmLocationLatitude
          FarmLocationLongitude
          Status
          Season
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          AreaOfField
          isPesticidesUsed
          FarmerPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          IndoramaPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          Images {
            data {
              attributes {
                url
              }
            }
          }
          DateOfHarvesting
          Season
        }
      }
    }
  }
`;
const CropsQuery = gql`
  query($page: Int, $pageSize: Int) {
    crops(pagination: { page: $page, pageSize: $pageSize }, sort: "createdAt:desc") {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const CropsMutation = gql`
  mutation ($Name: String, $image: ID) {
    createCrop(data: { Name: $Name, Image: $image }) {
      data {
        id
        attributes {
          Name
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const UpdateCrops = gql`
  mutation ($Name: String, $id: ID!, $isDelete: Boolean, $image: ID) {
    updateCrop(
      id: $id
      data: { Name: $Name, Image: $image, isDelete: $isDelete }
    ) {
      data {
        id
        attributes {
          Name
          isDelete
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const StatesQuery = gql`
  query($page: Int, $pageSize: Int) {
    states(pagination: { page: $page, pageSize: $pageSize }, sort: "createdAt:desc") {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          markets {
            data {
              id
              attributes {
                Name
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const StatesMutation = gql`
  mutation ($Name: String) {
    createState(data: { Name: $Name }) {
      data {
        id
        attributes {
          Name
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          markets {
            data {
              id
              attributes {
                Name
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const UpdateState = gql`
  mutation ($Name: String, $id: ID!, $isDelete: Boolean) {
    updateState(id: $id, data: { Name: $Name, isDelete: $isDelete }) {
      data {
        id
        attributes {
          Name
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          markets {
            data {
              id
              attributes {
                Name
              }
            }
          }
          createdAt
          updatedAt
          isDelete
        }
      }
    }
  }
`;
const LGAquery = gql`
  query ($id: ID, $page: Int, $pageSize: Int) {
    lgas(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
      filters: { state: { id: { eq: $id } } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          areas {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const LGAmutation = gql`
  mutation ($Name: String, $state: ID) {
    createLga(data: { Name: $Name, state: $state }) {
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          areas {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const UpdateLGA = gql`
  mutation ($Name: String, $state: ID, $id: ID!, $isDelete: Boolean) {
    updateLga(
      id: $id
      data: { Name: $Name, isDelete: $isDelete, state: $state }
    ) {
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          areas {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;

const Villagesquery = gql`
  query ($id: ID, $page: Int, $pageSize: Int) {
    villages(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
      filters: { area: { lga: { id: { eq: $id } } } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          area {
            data {
              id
              attributes {
                Name
                PostalCode
                lga {
                  data {
                    id
                    attributes {
                      Name
                      state {
                        data {
                          id
                          attributes {
                            Name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          localizations {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
        __typename
      }
    }
  }
`;
const VillageMutation = gql`
  mutation ($Name: String, $area: ID) {
    createVillage(data: { Name: $Name, area: $area }) {
      data {
        id
        attributes {
          Name
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const UpdateVillage = gql`
  mutation ($Name: String, $area: ID, $id: ID!, $isDelete: Boolean) {
    updateVillage(
      id: $id
      data: { Name: $Name, area: $area, isDelete: $isDelete }
    ) {
      data {
        id
        attributes {
          Name
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          isDelete
        }
      }
    }
  }
`;
const Areasquery = gql`
  query ($id: ID, $page: Int, $pageSize: Int) {
    areas(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
      filters: { lga: { id: { eq: $id } } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          PostalCode
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          villages {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const AreaMutation = gql`
  mutation ($Name: String, $PostalCode: Long, $lga: ID) {
    createArea(data: { Name: $Name, PostalCode: $PostalCode, lga: $lga }) {
      data {
        id
        attributes {
          Name
          PostalCode
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          villages {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const UpdateArea = gql`
  mutation (
    $Name: String
    $lga: ID
    $PostalCode: Long
    $id: ID!
    $isDelete: Boolean
  ) {
    updateArea(
      id: $id
      data: {
        Name: $Name
        PostalCode: $PostalCode
        lga: $lga
        isDelete: $isDelete
      }
    ) {
      data {
        id
        attributes {
          Name
          PostalCode
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          villages {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const MarketQuery = gql`
  query ($id: ID, $page: Int, $pageSize: Int) {
    markets(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
      filters: { state: { id: { eq: $id } } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const MarketMutation = gql`
  mutation ($Name: String, $state: ID) {
    createMarket(data: { Name: $Name, state: $state }) {
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const UpdateMarket = gql`
  mutation ($Name: String, $state: ID, $id: ID!, $isDelete: Boolean) {
    updateMarket(
      id: $id
      data: { Name: $Name, isDelete: $isDelete, state: $state }
    ) {
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const CropPricesQuery = gql`
  query (
    $page: Int
    $pageSize: Int
    $publicationState: PublicationState
    $publishedAt: DateTime
    $Rejected: Boolean
  ) {
    cropPrices(
      publicationState: $publicationState
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
      filters: {
        and: [
          { publishedAt: { eq: $publishedAt } }
          { Rejected: { eq: $Rejected } }
        ]
      }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Price
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Unit
          Rejected
          market {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Image {
            data {
              id
              attributes {
                name
                alternativeText
                caption
                width
                height
                url
                previewUrl
              }
            }
          }
          user {
            data {
              id
              attributes {
                Name
                UserType
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
const UpdateCropPriceMutation = gql`
  mutation updateCropPrice(
    $id: ID!
    $crop: ID
    $price: Float
    $state: ID
    $unit: String
    $market: ID
    $image: ID
    $Rejected: Boolean
    $published: DateTime
  ) {
    updateCropPrice(
      id: $id
      data: {
        crop: $crop
        Price: $price
        state: $state
        Unit: $unit
        market: $market
        Image: $image
        Rejected: $Rejected
        publishedAt: $published
      }
    ) {
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Price
          Unit
          state {
            data {
              attributes {
                Name
              }
            }
          }
          market {
            data {
              attributes {
                Name
              }
            }
          }
          Rejected
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const CropPriceMutation = gql`
  mutation addCropPrice(
    $crop: ID
    $price: Float
    $state: ID
    $unit: String
    $market: ID
    $image: ID
    $published: DateTime
    $user: ID
  ) {
    createCropPrice(
      data: {
        crop: $crop
        Price: $price
        state: $state
        Unit: $unit
        Rejected: false
        market: $market
        Image: $image
        publishedAt: $published
        user: $user
      }
    ) {
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Price
          Unit
          state {
            data {
              attributes {
                Name
              }
            }
          }
          market {
            data {
              attributes {
                Name
              }
            }
          }
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const RetailerQuery = gql`
  query ($page: Int, $pageSize: Int, $confirmed: Boolean, $blocked: Boolean) {
    usersPermissionsUsers(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
      filters: {
        UserType: { eq: "Retailer" }
        confirmed: { eq: $confirmed }
        blocked: { eq: $blocked }
      }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          username
          Name
          email
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          retailer_products {
            data {
              attributes {
                ItemName
                Price
                Unit
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          UserType
          retailer_categories {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          Bio
          Latitude
          Longitude
          blocked
          confirmed
          UserType
          prof_pic {
            data {
              attributes {
                url
              }
            }
          }
          ContactNumber
        }
      }
    }
  }
`;
const SoilTestQuery = gql`
  query ($page: Int, $pageSize: Int) {
    soilTests(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          SoilTestID
          Status
          ReasonForSoilTest
          ContactNumber
          nutrient
          Farmer {
            data {
              attributes {
                username
                email

                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          area {
            data {
              attributes {
                Name
                PostalCode
              }
            }
          }
          soil_test_samples {
            data {
              attributes {
                SampleID
              }
            }
          }
          PreferredCollectionDate
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const SingleSoilTestQuery = gql`
  query ($id: ID) {
    soilTest(id: $id) {
      data {
        id
        attributes {
          SoilTestID
          Status
          ReasonForSoilTest
          ContactNumber
          nutrient
          Farmer {
            data {
              id
              attributes {
                username
                email

                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          area {
            data {
              id
              attributes {
                Name
                PostalCode
              }
            }
          }
          soil_test_samples {
            data {
              id
              attributes {
                SampleID
                QuantityOfSamples
                createdAt
                updatedAt
                SampleAddedBy {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
                soil_test_results {
                  data {
                    id
                    attributes {
                      soil_test_sample {
                        data {
                          id
                          attributes {
                            SampleID
                          }
                        }
                      }
                      phObserved
                      OrganicCarbonObserved
                      TotalNitrogenObserved
                      PhosphorousObserved
                      PotassiumObserved
                      CalciumObserved
                      MagnesiumObserved
                      ZincObserved
                      SulphurObserved
                      IronObserved
                      CopperObserved
                      BoronObserved
                      ManganeseObserved
                      RecommendedNPKQty
                      RecommendedUreaQty
                      updatedAt
                    }
                  }
                }
              }
            }
          }
          PreferredCollectionDate
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const UpdateSoilTest = gql`
  mutation updateSoilTest(
    $soilTestId: ID!
    $contactNumber: String
    $preferredCollectionDate: DateTime
    $reason: String
    $farmerID: ID
    $areaID: ID
    $lgaID: ID
    $soilTestDisplayID: String
    $status: ENUM_SOILTEST_STATUS
    $nutrient: String
  ) {
    updateSoilTest(
      id: $soilTestId
      data: {
        ContactNumber: $contactNumber
        PreferredCollectionDate: $preferredCollectionDate
        ReasonForSoilTest: $reason
        Farmer: $farmerID
        area: $areaID
        lga: $lgaID
        SoilTestID: $soilTestDisplayID
        Status: $status
        nutrient: $nutrient
      }
    ) {
      data {
        id
        attributes {
          ContactNumber
          PreferredCollectionDate
          ReasonForSoilTest
          Farmer {
            data {
              id
              attributes {
                username
                Name
              }
            }
          }
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
              }
            }
          }
          SoilTestID
          Status
          nutrient
        }
      }
    }
  }
`;
const UsersQuery = gql`
  query ($UserType: String, $page: Int, $pageSize: Int) {
    usersPermissionsUsers(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
      filters: { UserType: { eq: $UserType } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          username
          Name
          email
          blocked
          confirmed
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          retailer_categories {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          retailer_products {
            data {
              attributes {
                ItemName
                Price
                Unit
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          UserType
          Bio
          Latitude
          Longitude
          UserType
          prof_pic {
            data {
              attributes {
                url
              }
            }
          }
          ContactNumber
        }
      }
    }
  }
`;
const AddSoilTestResult = gql`
  mutation soilTestAddResult(
    $soilTestSampleID: ID
    $ph: String
    $Carbon: String
    $Nitrogen: String
    $phosphorous: String
    $pottassium: String
    $calcium: String
    $magnesium: String
    $zinc: String
    $sulphur: String
    $iron: String
    $copper: String
    $boron: String
    $manganese: String
    $RecommendedNPKQty: String
    $RecommendedUreaQty: String
  ) {
    createSoilTestResult(
      data: {
        soil_test_sample: $soilTestSampleID
        phObserved: $ph
        OrganicCarbonObserved: $Carbon
        TotalNitrogenObserved: $Nitrogen
        PhosphorousObserved: $phosphorous
        PotassiumObserved: $pottassium
        CalciumObserved: $calcium
        MagnesiumObserved: $magnesium
        ZincObserved: $zinc
        SulphurObserved: $sulphur
        IronObserved: $iron
        CopperObserved: $copper
        BoronObserved: $boron
        ManganeseObserved: $manganese
        RecommendedNPKQty: $RecommendedNPKQty
        RecommendedUreaQty: $RecommendedUreaQty
      }
    ) {
      data {
        attributes {
          soil_test_sample {
            data {
              id
              attributes {
                SampleID
              }
            }
          }
          phObserved
          OrganicCarbonObserved
          TotalNitrogenObserved
          PhosphorousObserved
          PotassiumObserved
          CalciumObserved
          MagnesiumObserved
          ZincObserved
          SulphurObserved
          CopperObserved
          IronObserved
          BoronObserved
          ManganeseObserved
        }
      }
    }
  }
`;
const UpdateSoilTestResult = gql`
  mutation soilTestAddResult(
    $id: ID!
    $soilTestSampleID: ID
    $ph: String
    $Carbon: String
    $Nitrogen: String
    $phosphorous: String
    $pottassium: String
    $calcium: String
    $magnesium: String
    $zinc: String
    $sulphur: String
    $iron: String
    $copper: String
    $boron: String
    $manganese: String
    $RecommendedNPKQty: String
    $RecommendedUreaQty: String
  ) {
    updateSoilTestResult(
      id: $id
      data: {
        soil_test_sample: $soilTestSampleID
        phObserved: $ph
        OrganicCarbonObserved: $Carbon
        TotalNitrogenObserved: $Nitrogen
        PhosphorousObserved: $phosphorous
        PotassiumObserved: $pottassium
        CalciumObserved: $calcium
        MagnesiumObserved: $magnesium
        ZincObserved: $zinc
        SulphurObserved: $sulphur
        IronObserved: $iron
        CopperObserved: $copper
        BoronObserved: $boron
        ManganeseObserved: $manganese
        RecommendedNPKQty: $RecommendedNPKQty
        RecommendedUreaQty: $RecommendedUreaQty
      }
    ) {
      data {
        attributes {
          soil_test_sample {
            data {
              id
              attributes {
                SampleID
              }
            }
          }
          phObserved
          OrganicCarbonObserved
          TotalNitrogenObserved
          PhosphorousObserved
          PotassiumObserved
          CalciumObserved
          MagnesiumObserved
          ZincObserved
          SulphurObserved
          CopperObserved
          IronObserved
          BoronObserved
          ManganeseObserved
        }
      }
    }
  }
`;
const GetSingleRetailerQuery = gql`
  query ($id: ID) {
    usersPermissionsUsers(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          username
          Name
          blocked
          confirmed
          email
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          retailer_categories {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          retailer_products {
            data {
              id
              attributes {
                ItemName
                Price
                Unit
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          agronomist_lgas {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                      lgas {
                        data {
                          id
                          attributes {
                            Name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          UserType
          Bio
          Latitude
          Longitude
          UserType
          prof_pic {
            data {
              id
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
          blocked
          ContactNumber
        }
      }
    }
  }
`;
const updateRetailerProfPic = gql`
  mutation editRetailer($id: ID!, $prof_pic: ID) {
    updateUsersPermissionsUser(id: $id, data: { prof_pic: $prof_pic }) {
      data {
        id
        attributes {
          username
          Name
          email
          prof_pic {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          retailer_categories {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          retailer_products {
            data {
              attributes {
                ItemName
                Price
                Unit
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          UserType
          Bio
          Latitude
          Longitude
          UserType
          prof_pic {
            data {
              attributes {
                url
              }
            }
          }
          ContactNumber
        }
      }
    }
  }
`;
const updateRetailerQuery = gql`
  mutation editRetailer(
    $id: ID!
    $name: String
    $village: ID
    $lga: ID
    $UserType: ENUM_USERSPERMISSIONSUSER_USERTYPE
    $categories: [ID]
    $bio: String
    $latitude: Float
    $longitude: Float
    $profpic: ID
    $password: String
    $blocked: Boolean
    $confirmed: Boolean
    $contactNumber: String
    $agronomist_lgas: [ID]
  ) {
    updateUsersPermissionsUser(
      id: $id
      data: {
        Name: $name
        village: $village
        lga: $lga
        UserType: $UserType
        retailer_categories: $categories
        Bio: $bio
        blocked: $blocked
        password: $password
        confirmed: $confirmed
        Latitude: $latitude
        Longitude: $longitude
        prof_pic: $profpic
        ContactNumber: $contactNumber
        agronomist_lgas: $agronomist_lgas
      }
    ) {
      data {
        id
        attributes {
          username
          Name
          email
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          retailer_categories {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          retailer_products {
            data {
              attributes {
                ItemName
                Price
                Unit
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          agronomist_lgas {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          UserType
          Bio
          Latitude
          Longitude
          UserType
          prof_pic {
            data {
              attributes {
                url
              }
            }
          }
          ContactNumber
          confirmed
          blocked
        }
      }
    }
  }
`;
const getRetailerCategories = gql`
  query {
    retailerCategories {
      data {
        id
        attributes {
          CategoryName
          createdAt
          CategoryImage {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;
const createdRetailerProducts = gql`
  mutation (
    $ItemName: String
    $Price: Int
    $Unit: String
    $Images: [ID]
    $retailer_category: ID
    $retailers: [ID]
  ) {
    createRetailerProduct(
      data: {
        ItemName: $ItemName
        Price: $Price
        Unit: $Unit
        Images: $Images
        retailer_category: $retailer_category
        retailers: $retailers
      }
    ) {
      data {
        id
        attributes {
          ItemName
          Unit
          Price
          Images {
            data {
              id
            }
          }
          retailer_category {
            data {
              id
            }
          }
          retailers {
            data {
              id
            }
          }
        }
      }
    }
  }
`;
const updateRetailerProducts = gql`
  mutation editRetailerProduct(
    $productId: ID!
    $itemName: String
    $price: Int
    $unit: String
    $images: [ID]
    $isApproved: Boolean
    $retailer: [ID]
    $retailer_category: ID
  ) {
    updateRetailerProduct(
      id: $productId
      data: {
        ItemName: $itemName
        Price: $price
        Unit: $unit
        Images: $images
        isApproved: $isApproved
        retailers: $retailer
        retailer_category: $retailer_category
      }
    ) {
      data {
        attributes {
          ItemName
          Price
          Unit
          retailers {
            data {
              id
              attributes {
                Name
              }
            }
          }
          retailer_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          isApproved
        }
      }
    }
  }
`;
const DeleteStatesMutation = gql`
  mutation ($id: ID!) {
    deleteState(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteLGAMutation = gql`
  mutation ($id: ID!) {
    deleteLga(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteAreaMutation = gql`
  mutation ($id: ID!) {
    deleteArea(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteVillageMutation = gql`
  mutation ($id: ID!) {
    deleteVillage(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteCropMutation = gql`
  mutation ($id: ID!) {
    deleteCrop(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteMarketMutation = gql`
  mutation ($id: ID!) {
    deleteMarket(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteFarmdemo = gql`
  mutation ($id: ID!) {
    deleteFarmDemo(id: $id) {
      data {
        attributes {
          Farmer
          DateOfHarvesting
        }
      }
    }
  }
`;
const DeleteRetailerProduct = gql`
  mutation ($id: ID!) {
    deleteRetailerProduct(id: $id) {
      data {
        attributes {
          ItemName
          Price
        }
      }
    }
  }
`;
const DeleteFile = gql`
  mutation ($id: ID!) {
    deleteUploadFile(id: $id) {
      data {
        id
      }
    }
  }
`;
const DeleteUser = gql`
  mutation ($id: ID!) {
    deleteUsersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
        }
      }
    }
  }
`;
const DeleteBestPractice = gql`
  mutation ($id: ID!) {
    deleteBestCropPractise(id: $id) {
      data {
        attributes {
          content
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const DeleteActivity = gql`
  mutation ($id: ID!) {
    deleteActivity(id: $id) {
      data {
        attributes {
          FarmerName
          Date
          Latitude
          Longitude
          NoOfAttendees
        }
      }
    }
  }
`;
const DeleteMarketplaceProduct = gql`
  mutation ($id: ID!) {
    deleteMarketplaceProduct(id: $id) {
      data {
        attributes {
          ItemName
          Price
          AvailableQty
        }
      }
    }
  }
`;
const CreateAgronomist = gql`
  mutation ($areas: [ID], $user: ID) {
    createAgronomist(data: { areas: $areas, users_permissions_user: $user }) {
      data {
        id
        attributes {
          users_permissions_user {
            data {
              id
              attributes {
                username
                Name
                UserType
              }
            }
          }
          areas {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const getAgronomist = gql`
  query ($user: ID) {
    agronomists(filters: { users_permissions_user: { id: { eq: $user } } }) {
      data {
        id
        attributes {
          users_permissions_user {
            data {
              id
              attributes {
                username
                Name
                UserType
              }
            }
          }
          areas {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const queryUsersLarge = gql`
  query ($UserType: String, $village: ID, $lga: ID, $area: ID, $state: ID) {
    usersPermissionsUsers(
      pagination: { limit: 10000 }
      sort: "createdAt:desc"
      filters: {
        UserType: { eq: $UserType }
        village: {
          or: [{ id: { eq: $village } }, { area: { id: { eq: $area } } }]
        }
        lga: { or: [{ id: { eq: $lga } }, { state: { id: { eq: $state } } }] }
      }
    ) {
      data {
        id
        attributes {
          Name
          ContactNumber
        }
      }
    }
  }
`;
const getIndoramaUpdates = gql`
  query (
    $isDelete: Boolean
    $isActive: Boolean
    $id: ID
    $page: Int
    $pageSize: Int
  ) {
    newsAndUpdates(
      sort: "createdAt:desc"
      pagination: { page: $page, pageSize: $pageSize }
      filters: {
        isActive: { eq: $isActive }
        isDelete: { eq: $isDelete }
        id: { eq: $id }
      }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Title
          Body
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          isActive
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const UpdateIndoramaUpdates = gql`
  mutation (
    $id: ID!
    $Title: String
    $Body: String
    $isDelete: Boolean
    $isActive: Boolean
    $Images: [ID]
  ) {
    updateNewsAndUpdate(
      id: $id
      data: {
        Title: $Title
        Body: $Body
        isActive: $isActive
        isDelete: $isDelete
        Images: $Images
      }
    ) {
      data {
        id
        attributes {
          Title
          Body
          isActive
          isDelete
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const CreateIndoramaUpdates = gql`
  mutation ($Title: String, $Body: String, $Images: [ID]) {
    createNewsAndUpdate(
      data: {
        Title: $Title
        Body: $Body
        isActive: true
        isDelete: false
        Images: $Images
      }
    ) {
      data {
        id
        attributes {
          Title
          Body
          isActive
          isDelete
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const GetMarketplace = gql`
  query ($pageNumber: Int, $pageSize: Int, $categoryFilter: [ID]) {
    marketplaceProducts(
      filters: { marketplace_category: { id: { in: $categoryFilter } } }
      pagination: { page: $pageNumber, pageSize: $pageSize }
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          ItemName
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          seller {
            data {
              attributes {
                Name
                username
                ContactNumber
              }
            }
          }
          description
          contactNumber
          Price
          AvailableQty
          Unit
          marketplace_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const GetMarketplaceSingleProduct = gql`
  query ($id: ID!) {
    marketplaceProduct(id: $id) {
      data {
        id
        attributes {
          ItemName
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          seller {
            data {
              attributes {
                Name
                username
                ContactNumber
              }
            }
          }
          description
          contactNumber
          Price
          AvailableQty
          Unit
          marketplace_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const CreateMarketplaceProduct = gql`
  mutation sellItemMarketplace(
    $itemName: String
    $images: [ID]
    $userId: ID
    $contactNumber: String
    $price: Int
    $availableQty: Int
    $unit: String
    $category: ID
    $description: String
  ) {
    createMarketplaceProduct(
      data: {
        ItemName: $itemName
        Images: $images
        seller: $userId
        contactNumber: $contactNumber
        Price: $price
        AvailableQty: $availableQty
        Unit: $unit
        marketplace_category: $category
        description: $description
      }
    ) {
      data {
        id
        attributes {
          ItemName
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          seller {
            data {
              id
              attributes {
                Name
                username
              }
            }
          }
          description
          contactNumber
          Price
          AvailableQty
          Unit
          marketplace_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;
const UpdateMarketplaceProduct = gql`
  mutation updateMarketplaceProduct(
    $itemName: String
    $images: [ID]
    $contactNumber: String
    $price: Int
    $id: ID!
    $availableQty: Int
    $unit: String
    $category: ID
    $description: String
  ) {
    updateMarketplaceProduct(
      id: $id
      data: {
        ItemName: $itemName
        Images: $images
        contactNumber: $contactNumber
        Price: $price
        AvailableQty: $availableQty
        Unit: $unit
        marketplace_category: $category
        description: $description
      }
    ) {
      data {
        id
        attributes {
          ItemName
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          seller {
            data {
              id
              attributes {
                Name
                username
              }
            }
          }
          description
          contactNumber
          Price
          AvailableQty
          Unit
          marketplace_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;
const UpdateMarketplaceProductImg = gql`
  mutation updateMarketplaceProduct($images: [ID], $id: ID!) {
    updateMarketplaceProduct(id: $id, data: { Images: $images }) {
      data {
        id
        attributes {
          ItemName
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          seller {
            data {
              id
              attributes {
                Name
                username
              }
            }
          }
          description
          contactNumber
          Price
          AvailableQty
          Unit
          marketplace_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;
const GetBestCropPractices = gql`
  query getBestCropPractises($cropFilter: ID, $page: Int, $pageSize: Int) {
    bestCropPractises(
      filters: { crop: { id: { eq: $cropFilter } } }
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          media {
            data {
              id
              attributes {
                name
                formats
                url
                size
                mime
                ext
              }
            }
          }
          content
          cropImage {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const CreateBestCropPractices = gql`
  mutation ($crop: ID, $media: ID, $content: String, $cropImage: ID) {
    createBestCropPractise(
      data: {
        crop: $crop
        media: $media
        content: $content
        cropImage: $cropImage
      }
    ) {
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          media {
            data {
              id
              attributes {
                name
                formats
                url
                size
                mime
                ext
              }
            }
          }
          content
          cropImage {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const GetMarketplaceCategories = gql`
  query {
    marketplaceCategories(
      filters: { isDelete: { eq: false }, isActive: { eq: true } }
      sort: "CategoryName:asc"
    ) {
      data {
        id
        attributes {
          CategoryName
          CategoryImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          isDelete
          isActive
        }
      }
    }
  }
`;
const GetActivities = gql`
  query getActivities($page: Int, $pageSize: Int) {
    activities(
      sort: "createdAt:desc"
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          FarmerName
          Date
          Latitude
          Longitude
          NoOfAttendees
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ConditionOfCrop
          PlannedFarmDay
          Reason
          area {
            data {
              id
              attributes {
                Name
                lga {
                  data {
                    id
                    attributes {
                      Name
                      state {
                        data {
                          id
                          attributes {
                            Name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ActivityType
          Time
          createdAt
        }
      }
    }
  }
`;
const GetSingleActivity = gql`
# Write your query or mutation here
query getActivities($id: ID) {
    activity(id: $id) {
      data {
        id
        attributes {
          FarmerName
          Date
          Latitude
          Longitude
          NoOfAttendees
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ConditionOfCrop
          PlannedFarmDay
          Reason
          area {
            data {
              id
              attributes {
                Name
                lga {
                  data {
                    id
                    attributes {
                      Name
                      state {
                        data {
                          id
                          attributes {
                            Name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ActivityType
          Time
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const CreateActivities = gql`
  mutation (
    $FarmerName: String
    $Date: Date
    $Latitude: Float
    $Longitude: Float
    $NoOfAttendees: Int
    $crop: ID
    $ConditionOfCrop: String
    $PlannedFarmDay: Date
    $Reason: String
    $area: ID
    $ActivityType: ENUM_ACTIVITY_ACTIVITYTYPE
    $Time: String
  ) {
    createActivity(
      data: {
        FarmerName: $FarmerName
        Date: $Date
        Latitude: $Latitude
        Longitude: $Longitude
        NoOfAttendees: $NoOfAttendees
        crop: $crop
        ConditionOfCrop: $ConditionOfCrop
        PlannedFarmDay: $PlannedFarmDay
        Reason: $Reason
        area: $area
        ActivityType: $ActivityType
        Time: $Time
      }
    ) {
      data {
        id
        attributes {
          FarmerName
          Date
          Latitude
          Longitude
          NoOfAttendees
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ConditionOfCrop
          PlannedFarmDay
          Reason
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ActivityType
          Time
        }
      }
    }
  }
`;
const UpdateActivity = gql`
  mutation (
    $FarmerName: String
    $Date: Date
    $Latitude: Float
    $Longitude: Float
    $NoOfAttendees: Int
    $crop: ID
    $ConditionOfCrop: String
    $PlannedFarmDay: Date
    $Reason: String
    $area: ID
    $ActivityType: ENUM_ACTIVITY_ACTIVITYTYPE
    $Time: String
    $id: ID!
  ) {
    updateActivity(
      id: $id
      data: {
        FarmerName: $FarmerName
        Date: $Date
        Latitude: $Latitude
        Longitude: $Longitude
        NoOfAttendees: $NoOfAttendees
        crop: $crop
        ConditionOfCrop: $ConditionOfCrop
        PlannedFarmDay: $PlannedFarmDay
        Reason: $Reason
        area: $area
        ActivityType: $ActivityType
        Time: $Time
      }
    ) {
      data {
        id
        attributes {
          FarmerName
          Date
          Latitude
          Longitude
          NoOfAttendees
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ConditionOfCrop
          PlannedFarmDay
          Reason
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ActivityType
          Time
        }
      }
    }
  }
`;
const getDashboardStats = gql`
  query dashboardAPI($state: ID, $fromDate: DateTime, $toDate: DateTime) {
    soilTests(
      filters: {
        and: [
          { lga: { state: { id: { eq: $state } } } }
          { createdAt: { between: [$fromDate, $toDate] } }
        ]
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
    soilTestSamples(
      filters: {
        and: [
          { soil_test: { lga: { state: { id: { eq: $state } } } } }
          { createdAt: { between: [$fromDate, $toDate] } }
        ]
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
    soilTestResults(
      filters: {
        and: [
          {
            soil_test_sample: {
              soil_test: { lga: { state: { id: { eq: $state } } } }
            }
          }
          { createdAt: { between: [$fromDate, $toDate] } }
        ]
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
    farmDemos {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;
const getCropPricesDashboard = gql`
  query ($id: ID, $market: ID, $fromDate: DateTime, $toDate: DateTime) {
    cropPrices(
      publicationState: LIVE
      pagination: { limit: 10000 }
      sort: "publishedAt:desc"
      filters: {
        crop: { id: { eq: $id } }
        market: { id: { eq: $market } }
        publishedAt: { between: [$fromDate, $toDate] }
      }
    ) {
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Price
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Unit
          market {
            data {
              id
              attributes {
                Name
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
const getFarmDemoStatsDashboard = gql`
  query dashboardAPI(
    $state: ID
    $status: String
    $fromDate: DateTime
    $toDate: DateTime
  ) {
    all: farmDemos(
      filters: {
        state: { id: { eq: $state } }
        createdAt: { between: [$fromDate, $toDate] }
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
    status: farmDemos(
      filters: {
        and: [
          { state: { id: { eq: $state } } }
          { Status: { eq: $status } }
          { createdAt: { between: [$fromDate, $toDate] } }
        ]
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;
const getallChats = gql`
  query ($limit: Int, $start: Int, $key: String, $isAskIndorama: Boolean) {
    chats(
      filters: {
        members: {
          or: [{ username: { containsi: $key } }, { Name: { containsi: $key } }]
        }
        isAskIndorama: { eq: $isAskIndorama }
      }
      sort: "updatedAt:desc"
      pagination: { limit: $limit, start: $start }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          isAskIndorama
          members {
            data {
              id
              attributes {
                username
                Name
                UserType
                Name
                prof_pic {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
          chatInitiatedBy {
            data {
              id
              attributes {
                username
                Name
                UserType
                Name
                prof_pic {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const getChatMessages = gql`
  query ($id: ID!) {
    chat(id: $id) {
      data {
        id
        attributes {
          messages {
            data {
              id
              attributes {
                message
                createdAt
                updatedAt
                image_attachment {
                  data {
                    id
                    attributes {
                      name
                      width
                      height
                      url
                    }
                  }
                }
                from_user {
                  data {
                    id
                    attributes {
                      username
                      Name
                      UserType
                      prof_pic {
                        data {
                          id
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
                to_user {
                  data {
                    id
                    attributes {
                      username
                      Name
                      UserType
                      prof_pic {
                        data {
                          id
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
                chat {
                  data {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const getSurveys = gql`
  query ($page: Int, $pageSize: Int) {
    surveyForms(
      sort: "updatedAt:desc"
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          SurveyTitle
          SurveyDescription
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const CreateSurveys = gql`
  mutation (
    $SurveyTitle: String
    $SurveyDescription: String
    $Fields: [SurveyFormFieldsDynamicZoneInput!]
  ) {
    createSurveyForm(
      data: {
        SurveyTitle: $SurveyTitle
        SurveyDescription: $SurveyDescription
        Fields: $Fields
      }
    ) {
      data {
        id
        attributes {
          SurveyTitle
          SurveyDescription
          Fields {
            __typename
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const getSurveyResults = gql`
  query ($limit: Int, $start: Int, $id: ID) {
    surveyResults(
      sort: "updatedAt:desc"
      pagination: { limit: $limit, start: $start }
      filters: { survey_form: { id: { eq: $id } } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          SurveyResponse
          createdAt
        }
      }
    }
  }
`;
const deleteSurvey = gql`
  mutation ($id: ID!) {
    deleteSurveyForm(id: $id) {
      data {
        attributes {
          SurveyTitle
          SurveyDescription
        }
      }
    }
  }
`;
const getDashboardAd = gql`
  query {
    advertisement {
      data {
        id
        attributes {
          AdImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          url
          isActive
          updatedAt
        }
      }
    }
  }
`;
const getRetailerAd = gql`
  query {
    retailerAdvertisement {
      data {
        id
        attributes {
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
          url
          isActive
          updatedAt
        }
      }
    }
  }
`;
const updateDashboardAd = gql`
  mutation updateAdvertisement($imageId: ID, $clickUrl: String) {
    updateAdvertisement(
      data: { AdImage: $imageId, url: $clickUrl, isActive: true }
    ) {
      data {
        id
        attributes {
          AdImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          url
          isActive
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const updateRetailerAd = gql`
  mutation updateAdvertisement($imageId: ID, $clickUrl: String) {
    updateRetailerAdvertisement(
      data: { Image: $imageId, url: $clickUrl, isActive: true }
    ) {
      data {
        id
        attributes {
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
          url
          isActive
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const getSmsCampaigns = gql`
  query ($page: Int, $pageSize: Int, $id: ID) {
    smsCampaigns(
      sort: "updatedAt:desc"
      pagination: { page: $page, pageSize: $pageSize }
      filters: { id: { eq: $id } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          message
          isAllFarmers
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
              }
            }
          }
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          recipients {
            data {
              id
              attributes {
                Name
                ContactNumber
              }
            }
          }
          apiKey
          SMSGatewayResponse
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const createSMSCampaign = gql`
  mutation createSMSCampaign(
    $message: String
    $state: ID
    $lga: ID
    $area: ID
    $village: ID
    $isAllFarmers: Boolean
  ) {
    createSmsCampaign(
      data: {
        message: $message
        state: $state
        lga: $lga
        area: $area
        village: $village
        isAllFarmers: $isAllFarmers
      }
    ) {
      data {
        id
        attributes {
          message
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
              }
            }
          }
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          recipients {
            data {
              id
              attributes {
                Name
                ContactNumber
              }
            }
          }
          apiKey
          SMSGatewayResponse
          isAllFarmers
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const getPendingRetailerApprovals = gql`
  query getPendingRetailerApprovals {
    usersPermissionsUsers(
      filters: {
        and: [
          { confirmed: { eq: false } }
          { blocked: { eq: false } }
          { UserType: { eq: "Retailer" } }
        ]
      }
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          username
          Name
          Bio
          email
          confirmed
          blocked
          UserType
          ContactNumber
          isContactNumberVerified
        }
      }
    }
  }
`;
const readApprovalCropPrices = gql`
  query readApprovalCropPrices {
    cropPrices(
      filters: { publishedAt: { eq: null }, Rejected: { eq: false } }
      publicationState: PREVIEW
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Price
          Unit
          market {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Image {
            data {
              attributes {
                url
              }
            }
          }
          Rejected
          user {
            data {
              id
              attributes {
                Name
                username
              }
            }
          }
        }
      }
    }
  }
`;
@Injectable({
  providedIn: "root",
})
export class DataService {
  baseURL = environment.apiUrl;
  params: URLSearchParams = new URLSearchParams();

  constructor(
    private http: HttpClient,
    private apollo: Apollo,
    private toastr: ToastrService
  ) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = "Unknown error!";
    console.log(error);
    // if (error.error instanceof ErrorEvent) {
    //   // Client-side errors
    //   errorMessage = `Error: ${error.error.message}`;
    // } else {
    //   // Server-side errors
    //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    // }
    if (error.error.message) this.toastr.error(error.error.message);
    if (error.status !== 200) {
      this.toastr.error(error.error.error.Message);
      this.toastr.error(error.error.message);
      return throwError(errorMessage);
    }
  }

  Login(data): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
    };
    return this.http.post(this.baseURL + `/auth/login/`, data, httpOptions1);
  }
  createRetailer(data): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
    };
    return this.http.post(this.baseURL + `/api/users`, data, httpOptions1);
  }
  fetchMessage(api_token, message_id): Observable<any> {
    return this.http
      .get(
        `https://www.bulksmsnigeria.com/api/v2/delivery?api_token=${api_token}&message_id=${message_id}`
      )
      .pipe(catchError(this.handleError));
  }
  getSurveyDetails(data): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/survey-forms/${data}?populate=Fields`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }
  downloadActivities(data): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/activity/download?fromDate=${data.fromDate}&toDate=${data.toDate}`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadCropPrices(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/crop-prices`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadFarmDemos(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/download-farm-demos`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadIndoramaUpdates(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/indorama-updates`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }


  downloadMarketplace(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/marketplace`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadMaster(masterType): Observable<any> {

    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/${masterType}`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadStates(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/states`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadLgas(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/lgas`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadCities(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/cities`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadVillages(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/villages`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadMarkets(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/markets`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadCrops(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/crops`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadUsers(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/activity/download-users`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadRetailers(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/activity/retailers-download`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }


  downloadSMSCampaigns(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/sms-campaigns`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }


  downloadSoilTests(): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/excel-download/soiltest`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  downloadResponses(data): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/survey-result/download?surveyForm=${data}`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }

  getSoilTestStats(data, fromDate?, toDate?): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/dashboard-soil-npk?stateId=${data}&fromDate=${fromDate}T00:00:00.000Z&toDate=${toDate}T23:59:59.000Z`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }
  getFarmDemoYieldStats(data, fromDate?, toDate?): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    return this.http
      .get(
        `${environment.apiUrl}/api/dashboard-farm-demo?stateId=${data}&fromDate=${fromDate}T00:00:00.000Z&toDate=${toDate}T23:59:59.000Z`,
        httpOptions1
      )
      .pipe(catchError(this.handleError));
  }
  getDashboardStats(data?, fromDate?, toDate?) {
    return this.apollo.watchQuery({
      query: getDashboardStats,
      fetchPolicy: "no-cache",
      variables: {
        state: data,
        fromDate: `${fromDate}T00:00:00.000Z`,
        toDate: `${toDate}T23:59:59.000Z`,
      },
    });
  }
  getCropPricesDashboard(id, market?, fromDate?, toDate?) {
    return this.apollo.watchQuery({
      query: getCropPricesDashboard,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
        market: market,
        fromDate: `${fromDate}T00:00:00.000Z`,
        toDate: `${toDate}T23:59:59.000Z`,
      },
    });
  }
  getFarmDemoStatsDashboard(state?, status?, fromDate?, toDate?) {
    return this.apollo.watchQuery({
      query: getFarmDemoStatsDashboard,
      fetchPolicy: "no-cache",
      variables: {
        state: state,
        status: status,
        fromDate: `${fromDate}T00:00:00.000Z`,
        toDate: `${toDate}T23:59:59.000Z`,
      },
    });
  }
  getPendingRetailerApprovals() {
    return this.apollo.watchQuery({
      query: getPendingRetailerApprovals,
      fetchPolicy: "no-cache",
    });
  }
  getApprovalCropPrices() {
    return this.apollo.watchQuery({
      query: readApprovalCropPrices,
      fetchPolicy: "no-cache",
    });
  }
  getallChats(limit?, start?, key?, isAskIndorama?) {
    return this.apollo.watchQuery({
      query: getallChats,
      fetchPolicy: "no-cache",
      variables: {
        limit: limit,
        start: start,
        key: key ? key : undefined,
        isAskIndorama: isAskIndorama ? isAskIndorama : undefined,
      },
    });
  }
  getSurveys(limit?, start?, key?) {
    return this.apollo.watchQuery({
      query: getSurveys,
      fetchPolicy: "no-cache",
      variables: {
        limit: limit,
        start: start,
        key: key ? key : undefined,
      },
    });
  }
  getSmsCampaigns(page?, pageSize?, id?) {
    return this.apollo.watchQuery({
      query: getSmsCampaigns,
      fetchPolicy: "no-cache",
      variables: {
        page: page,
        pageSize: pageSize,
        id: id,
      },
    });
  }
  createSMSCampaign(data) {
    return this.apollo.mutate({
      mutation: createSMSCampaign,
      fetchPolicy: "no-cache",
      variables: {
        message: data.message,
        state: data.state ? data.state : undefined,
        lga: data.lga ? data.lga : undefined,
        area: data.area ? data.area : undefined,
        village: data.village ? data.village : undefined,
        isAllFarmers: !data.isAllFarmers,
      },
    });
  }
  getSurveyResults(id) {
    return this.apollo.watchQuery({
      query: getSurveyResults,
      fetchPolicy: "no-cache",
      variables: {
        limit: 10000,
        id: id,
      },
    });
  }
  createSurveys(SurveyTitle, SurveyDescription, Fields) {
    return this.apollo.mutate({
      mutation: CreateSurveys,
      fetchPolicy: "no-cache",
      variables: {
        SurveyTitle: SurveyTitle,
        SurveyDescription: SurveyDescription,
        Fields: Fields,
      },
    });
  }
  deleteSurvey(id) {
    return this.apollo.mutate({
      mutation: deleteSurvey,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  getChatMessages(id) {
    return this.apollo.watchQuery({
      query: getChatMessages,
      variables: {
        id: id,
      },
      fetchPolicy: "no-cache",
    });
  }
  getFarmDemos(page?, pageSize?) {
    return this.apollo.watchQuery({
      query: FarmDemosQuery,
      fetchPolicy: "no-cache",
      variables: {
        page: page,
        pageSize: pageSize,
      },
    });
  }
  getSingleFarmDemo(id) {
    return this.apollo.watchQuery({
      query: FarmDemoQuery,
      variables: {
        id: id,
      },
      fetchPolicy: "no-cache",
    });
  }
  getCrops(page?, pageSize?) {
    return this.apollo.watchQuery({
      query: CropsQuery,
      fetchPolicy: "no-cache",
      variables : {
        page: page,
        pageSize: pageSize,
      },
    });
  }
  getStates(page?, pageSize?) {
    return this.apollo.watchQuery({
      query: StatesQuery,
      fetchPolicy: "no-cache",
      variables : {
        page: page,
        pageSize: pageSize,
      },
    });
  }
  getLGAs(page?, pageSize?, id?) {
    return this.apollo.watchQuery({
      query: LGAquery,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
        page: page,
        pageSize: pageSize,
      },
    });
  }
  getVillages(page?, pageSize?, id?) {
    return this.apollo.watchQuery({
      query: Villagesquery,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
        page: page,
        pageSize: pageSize,
      },
    });
  }
  getAreas(page?, pageSize?, id?) {
    return this.apollo.watchQuery({
      query: Areasquery,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
        page: page,
        pageSize: pageSize,
      },
    });
  }
  getMarkets(page?, pageSize?, id?) {
    return this.apollo.watchQuery({
      query: MarketQuery,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
        page: page,
        pageSize: pageSize,
      },
    });
  }
  getCropPrices(page?, pageSize?, PublicationState?, publishedAt?, Rejected?) {
    return this.apollo.watchQuery({
      query: CropPricesQuery,
      fetchPolicy: "no-cache",
      variables: {
        page: page,
        pageSize: pageSize,
        publicationState: PublicationState,
        publishedAt: publishedAt,
        Rejected: Rejected,
      },
    });
  }
  getRetailers(page?, pageSize?, confirmed?, blocked?) {
    return this.apollo.watchQuery({
      query: RetailerQuery,
      fetchPolicy: "no-cache",
      variables: {
        page: page,
        pageSize: pageSize,
        confirmed: confirmed,
        blocked: blocked,
      },
    });
  }
  getRetailerCategories() {
    return this.apollo.watchQuery({
      query: getRetailerCategories,
      fetchPolicy: "no-cache",
    });
  }
  getUsers(page?, pageSize?, UserType?) {

    let variables = {
        page: page,
        pageSize: pageSize,
      };

      if(UserType!=null) {
        variables["UserType"] = UserType;
      }

    return this.apollo.watchQuery({
      query: UsersQuery,
      fetchPolicy: "no-cache",
      variables: variables,
    });
  }
  getUsersLarge(UserType?, data?) {
    return this.apollo.watchQuery({
      query: queryUsersLarge,
      fetchPolicy: "no-cache",
      variables: {
        UserType: UserType,
        village: data.village ? data.village : null,
        lga: data.lga ? data.lga : null,
        area: data.area ? data.area : null,
        state: data.state ? data.state : null,
      },
    });
  }
  getsoilTests(page?, pageSize?) {
    return this.apollo.watchQuery({
      query: SoilTestQuery,
      fetchPolicy: "no-cache",
      variables: {
        page: page,
        pageSize: pageSize,
      },
    });
  }
  getsingleSoilTests(id) {
    return this.apollo.watchQuery({
      query: SingleSoilTestQuery,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
      },
    });
  }
  getsingleRetailer(id) {
    return this.apollo.watchQuery({
      query: GetSingleRetailerQuery,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
      },
    });
  }

  AddFarmdemo(farmdemo) {
    return this.apollo.mutate({
      mutation: AddFarmDemoMutation,
      variables: {
        farmer: farmdemo.Farmer,
        latitude: parseFloat(farmdemo.FarmLocationLatitude),
        longitude: parseFloat(farmdemo.FarmLocationLongitude),
        lga: farmdemo.lga,
        state: farmdemo.state,
        crop: farmdemo.Crops,
        area: farmdemo.AreaOfField,
        farmerPractise: farmdemo.ComponentFarmDemoFarmDemoPractiseInput,
        indoramaPractise: farmdemo.ComponentFarmDemoFarmDemoPractiseInput,
        dateOfHarvesting: farmdemo.dateOfHarvesting,
        season: farmdemo.Season,
        Status: farmdemo.Status,
        isPesticidesUsed: farmdemo.isPesticidesUsed == "true" ? true : false,
        images: farmdemo.images,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }

  AddStates(state) {
    return this.apollo.mutate({
      mutation: StatesMutation,
      variables: {
        Name: state.state,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  AddLGA(lga) {
    return this.apollo.mutate({
      mutation: LGAmutation,
      variables: {
        Name: lga.lga,
        state: lga.state,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  AddArea(area) {
    return this.apollo.mutate({
      mutation: AreaMutation,
      variables: {
        Name: area.area,
        lga: area.lga,
        PostalCode: area.PostalCode,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  AddMarket(market) {
    return this.apollo.mutate({
      mutation: MarketMutation,
      variables: {
        Name: market.market,
        state: market.state,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  AddCrop(crop, image) {
    return this.apollo.mutate({
      mutation: CropsMutation,
      variables: {
        Name: crop.crop,
        image: image,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  Addvillage(village) {
    return this.apollo.mutate({
      mutation: VillageMutation,
      variables: {
        Name: village.village,
        area: village.area,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  AddCropPrice(price, image) {
    return this.apollo.mutate({
      mutation: CropPriceMutation,
      variables: {
        crop: price.crop,
        price: parseFloat(price.Price),
        unit: price.Unit,
        state: price.state,
        market: price.market,
        image: image,
        user: parseInt(localStorage.getItem("uid")),
        published: new Date(),
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  AddIndoramaUpdates(price, imageid) {
    return this.apollo.mutate({
      mutation: CreateIndoramaUpdates,
      variables: {
        Title: price.Title,
        Body: price.Body,
        Images: imageid ? imageid : price.Image,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  createBestCropPractise(price, imageid, media) {
    return this.apollo.mutate({
      mutation: CreateBestCropPractices,
      variables: {
        crop: price.crop,
        content: price.content,
        cropImage: imageid,
        media: media,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  createMarketplaceProduct(price, imageid) {
    return this.apollo.mutate({
      mutation: CreateMarketplaceProduct,
      variables: {
        itemName: price.itemName,
        images: imageid,
        userId: price.userId,
        contactNumber: String(price.contactNumber),
        price: price.price,
        availableQty: parseInt(price.availableQty),
        unit: price.unit,
        category: parseInt(price.category),
        description: price.description,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  updateMarketplaceProduct(price, id, imageid?) {
    return this.apollo.mutate({
      mutation: UpdateMarketplaceProduct,
      variables: {
        id: id,
        itemName: price.itemName,
        images: imageid,
        // userId: price.userId,
        contactNumber: String(price.contactNumber),
        price: price.price,
        availableQty: parseInt(price.availableQty),
        unit: price.unit,
        category: parseInt(price.category),
        description: price.description,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  updateMarketplaceProductImg(id, imageid?) {
    return this.apollo.mutate({
      mutation: UpdateMarketplaceProductImg,
      variables: {
        id: id,
        images: imageid,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  createActivity(price) {
    return this.apollo.mutate({
      mutation: CreateActivities,
      variables: {
        FarmerName: price.FarmerName ? price.FarmerName : undefined,
        Date: price.Date,
        Latitude: parseFloat(price.Latitude),
        Longitude: parseFloat(price.Longitude),
        NoOfAttendees: parseInt(price.NoOfAttendees),
        crop: price.crop ? price.crop : undefined,
        ConditionOfCrop: price.ConditionOfCrop
          ? price.ConditionOfCrop
          : undefined,
        PlannedFarmDay: price.PlannedFarmDay ? price.PlannedFarmDay : undefined,
        Reason: price.Reason,
        area: price.area,
        ActivityType: price.ActivityType,
        Time: price.Time,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  getAgronomist(id?) {
    return this.apollo.watchQuery({
      query: getAgronomist,
      variables: {
        user: id,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  getIndoramaUpdates(id?, page?, pageSize?) {
    return this.apollo.watchQuery({
      query: getIndoramaUpdates,
      variables: {
        id: id,
        isActive: true,
        isDelete: false,
        page: page,
        pageSize: pageSize,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  getMarketplace(pageNumber?, pageSize?, categoryFilter?) {
    return this.apollo.watchQuery({
      query: GetMarketplace,
      variables: {
        pageNumber: pageNumber,
        pageSize: pageSize,
        categoryFilter: categoryFilter,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  getSingleMarketplaceProduct(id) {
    return this.apollo.watchQuery({
      query: GetMarketplaceSingleProduct,
      variables: {
        id: id,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  getBestCropPractises(page?, pageSize?, cropFilter?) {
    return this.apollo.watchQuery({
      query: GetBestCropPractices,
      variables: {
        page: page,
        pageSize: pageSize,
        cropFilter: cropFilter,
      },
      errorPolicy: "all",
      // fetchPolicy: "no-cache",
    });
  }
  getActivities(page?, pageSize?) {
    return this.apollo.watchQuery({
      query: GetActivities,
      fetchPolicy: "no-cache",
      variables: {
        page: page,
        pageSize: pageSize,
      },
      errorPolicy: "all",
    });
  }
  getActivity(id?) {
    return this.apollo.watchQuery({
      query: GetSingleActivity,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  getMarketplaceCategories(id?) {
    return this.apollo.watchQuery({
      query: GetMarketplaceCategories,
      fetchPolicy: "no-cache",
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  createAgronomist(data, id) {
    return this.apollo.mutate({
      mutation: CreateAgronomist,
      variables: {
        areas: data.area,
        user: id,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateCropPrice(price, id, imageid, Rejected?, published?) {
    return this.apollo.mutate({
      mutation: UpdateCropPriceMutation,
      variables: {
        id: id,
        crop: price?.crop,
        price: price?.Price ? parseFloat(price?.Price) : undefined,
        unit: price?.Unit,
        state: price?.state,
        market: price?.market,
        published: published,
        Rejected: Rejected,
        image: imageid ? imageid : price?.Image,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  AddSoilTestResult(result) {
    return this.apollo.mutate({
      mutation: AddSoilTestResult,
      variables: {
        soilTestSampleID: result.soil_test_sample,
        zinc: result.ZincObserved,
        boron: result.BoronObserved,
        iron: result.IronObserved,
        calcium: result.CalciumObserved,
        Carbon: result.OrganicCarbonObserved,
        phosphorous: result.PhosphorousObserved,
        magnesium: result.MagnesiumObserved,
        ph: result.phObserved,
        copper: result.CopperObserved,
        Nitrogen: result.TotalNitrogenObserved,
        manganese: result.ManganeseObserved,
        pottassium: result.PotassiumObserved,
        sulphur: result.SulphurObserved,
        RecommendedNPKQty: result.RecommendedNPKQty,
        RecommendedUreaQty: result.RecommendedUreaQty,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateSoilTestResult(result) {
    return this.apollo.mutate({
      mutation: UpdateSoilTestResult,
      variables: {
        id: result.id,
        zinc: result.ZincObserved,
        boron: result.BoronObserved,
        iron: result.IronObserved,
        calcium: result.CalciumObserved,
        Carbon: result.OrganicCarbonObserved,
        phosphorous: result.PhosphorousObserved,
        magnesium: result.MagnesiumObserved,
        ph: result.phObserved,
        copper: result.CopperObserved,
        Nitrogen: result.TotalNitrogenObserved,
        manganese: result.ManganeseObserved,
        pottassium: result.PotassiumObserved,
        sulphur: result.SulphurObserved,
        RecommendedNPKQty: result.RecommendedNPKQty,
        RecommendedUreaQty: result.RecommendedUreaQty,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateCrop(crop, id, Imageid) {
    return this.apollo.mutate({
      mutation: UpdateCrops,
      variables: {
        Name: crop.crop,
        isDelete: crop.isDelete,
        id: id,
        image: Imageid,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateState(data, id) {
    return this.apollo.mutate({
      mutation: UpdateState,
      variables: {
        Name: data.state,
        isDelete: data.isDelete,
        id: id,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateLGA(data, id) {
    return this.apollo.mutate({
      mutation: UpdateLGA,
      variables: {
        Name: data.lga,
        state: data.state,
        isDelete: data.isDelete,
        id: id,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateMarket(data, id) {
    return this.apollo.mutate({
      mutation: UpdateMarket,
      variables: {
        Name: data.market,
        state: data.state,
        isDelete: data.isDelete,
        id: id,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateArea(area, id) {
    return this.apollo.mutate({
      mutation: UpdateArea,
      variables: {
        Name: area.area,
        lga: area.lga,
        PostalCode: area.PostalCode,
        isDelete: area.isDelete,
        id: id,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  Updatevillage(village, id) {
    return this.apollo.mutate({
      mutation: UpdateVillage,
      variables: {
        Name: village.village,
        area: village.area,
        isDelete: village.isDelete,
        id: id,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateSoilTest(test, soilTestId) {
    return this.apollo.mutate({
      mutation: UpdateSoilTest,
      variables: {
        soilTestId: soilTestId,
        contactNumber: test.ContactNumber,
        preferredCollectionDate: test.PreferredCollectionDate,
        reason: test.ReasonForSoilTest,
        farmerID: test.Farmer,
        areaID: test.area,
        lgaID: test.lga,
        soilTestDisplayID: test.soilTestDisplayID,
        status: test.Status,
        nutrient: test.nutrient,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateFarmDemo(data, id) {
    return this.apollo.mutate({
      mutation: UpdateFarmDemo,
      variables: {
        id: id,
        farmer: data.Farmer,
        longitude: parseFloat(data.FarmLocationLongitude),
        latitude: parseFloat(data.FarmLocationLatitude),
        lga: data.lga,
        state: data.state,
        crop: data.Crops,
        area: data.AreaOfField,
        farmerPractise: {
          Yield: parseFloat(data.Yield_F),
          DateOfSowing: data.DateOfSowing_F,
          DateOfDemonstration: data.DateOfDemonstration_F,
          FirstUreaApplication: data.FirstUreaApplication_F,
          SecondUreaApplication: data.SecondUreaApplication_F,
        },
        indoramaPractise: {
          Yield: parseFloat(data.Yield_I),
          DateOfSowing: data.DateOfSowing_I,
          DateOfDemonstration: data.DateOfDemonstration_I,
          FirstUreaApplication: data.FirstUreaApplication_I,
          SecondUreaApplication: data.SecondUreaApplication_I,
        },
        // isPesticidesUsed: data.isPesticidesUsed,
        images: data.images,
        season: data.Season,
        Status: data.Status,
        dateOfHarvesting: data.DateOfHarvesting,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateRetailer(data, id) {
    return this.apollo.mutate({
      mutation: updateRetailerQuery,
      variables: {
        id: id,
        categories: data.retailer_categories,
        name: data.Name,
        latitude: data.Latitude ? parseFloat(data.Latitude) : undefined,
        longitude: data.Longitude ? parseFloat(data.Longitude) : undefined,
        village: data.village,
        password: data.password ? data.password : undefined,
        lga: data.lga,
        bio: data.Bio,
        agronomist_lgas: data.agronomist_lgas,
        blocked: data.blocked == "true" ? true : false,
        confirmed: data.confirmed,
        UserType: data?.UserType,
        contactNumber: data.ContactNumber,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateRetailerPic(id, image) {
    return this.apollo.mutate({
      mutation: updateRetailerProfPic,
      variables: {
        id: id,
        prof_pic: image,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  AddFarmdemoPic(id, image) {
    return this.apollo.mutate({
      mutation: UpdateFarmDemo,
      variables: {
        id: id,
        images: image,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  addRetailerProducts(data, retailer_category, retailer, image) {
    return this.apollo.mutate({
      mutation: createdRetailerProducts,
      variables: {
        ItemName: data.itemName,
        Price: parseInt(data.price),
        Unit: data.unit,
        Images: image,
        isApproved: true,
        retailer_category: retailer_category,
        retailers: retailer,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateRetailerProducts(data, retailer_category, retailer) {
    return this.apollo.mutate({
      mutation: updateRetailerProducts,
      variables: {
        productId: data.id,
        itemName: data.itemName,
        price: parseInt(data.price),
        unit: data.unit,
        // images: data.,
        isApproved: true,
        retailer_category: retailer_category,
        retailer: retailer,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  UpdateIndoramaUpdates(price?, id?, imageid?) {
    return this.apollo.mutate({
      mutation: UpdateIndoramaUpdates,
      variables: {
        id: id,
        Title: price?.Title,
        isDelete: price?.isDelete,
        Body: price?.Body,
        Images: imageid ? imageid : price?.Image,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  updateActivity(price, id) {
    return this.apollo.mutate({
      mutation: UpdateActivity,
      variables: {
        id: id,
        FarmerName: price.FarmerName,
        Date: price.Date,
        Latitude: parseFloat(price.Latitude),
        Longitude: parseFloat(price.Longitude),
        NoOfAttendees: parseInt(price.NoOfAttendees),
        crop: price.crop,
        ConditionOfCrop: price.ConditionOfCrop,
        PlannedFarmDay: price.PlannedFarmDay,
        Reason: price.Reason,
        area: price.area,
        ActivityType: price.ActivityType,
        Time: price.Time,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  upload(file: any): Observable<any> {
    const formData = new FormData();
    for (var i = 0; i < file.length; i++) {
      // formData.append("file[]",  file[i]);
      formData.append("files", file[i], file[i]?.name);
    }
    // formData.append("files", file, file?.name);
    console.log(formData);
    const httpOptions1: Object = {
      observe: "response",
    };
    return this.http.post(this.baseURL + `/api/upload`, formData, httpOptions1);
  }
  uploadActivities(file: any): Observable<any> {
    const formData = new FormData();
    for (var i = 0; i < file.length; i++) {
      // formData.append("file[]",  file[i]);
      formData.append("file", file[i], file[i]?.name);
    }
    // formData.append("files", file, file?.name);
    console.log(formData);
    const httpOptions1: Object = {
      observe: "response",
    };
    return this.http.post(
      this.baseURL + `/api/activity/upload`,
      formData,
      httpOptions1
    );
  }
  deleteArea(id) {
    return this.apollo.mutate({
      mutation: DeleteAreaMutation,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  deleteVillage(id) {
    return this.apollo.mutate({
      mutation: DeleteVillageMutation,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  deleteLGA(id) {
    return this.apollo.mutate({
      mutation: DeleteLGAMutation,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  deleteState(id) {
    return this.apollo.mutate({
      mutation: DeleteStatesMutation,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  deleteMarket(id) {
    return this.apollo.mutate({
      mutation: DeleteMarketMutation,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  deleteCrop(id) {
    return this.apollo.mutate({
      mutation: DeleteCropMutation,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  deleteFarmDemo(id) {
    return this.apollo.mutate({
      mutation: DeleteFarmdemo,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  deleteProduct(id) {
    return this.apollo.mutate({
      mutation: DeleteRetailerProduct,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  deleteFile(id) {
    return this.apollo.mutate({
      mutation: DeleteFile,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  deleteUser(id) {
    return this.apollo.mutate({
      mutation: DeleteUser,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  deleteBestPractice(id) {
    return this.apollo.mutate({
      mutation: DeleteBestPractice,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  deleteActivity(id) {
    return this.apollo.mutate({
      mutation: DeleteActivity,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  DeleteMarketplaceProduct(id) {
    return this.apollo.mutate({
      mutation: DeleteMarketplaceProduct,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  getDashboardAd() {
    return this.apollo.watchQuery({
      query: getDashboardAd,
      fetchPolicy: "no-cache",
    });
  }
  getRetailerAd() {
    return this.apollo.watchQuery({
      query: getRetailerAd,
      fetchPolicy: "no-cache",
    });
  }
  updateRetailerAd(url, image) {
    return this.apollo.mutate({
      mutation: updateRetailerAd,
      variables: {
        // clickUrl: url,
        imageId: image,
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  }
  updateDashboardAd(url, image) {
    return this.apollo.mutate({
      mutation: updateDashboardAd,
      fetchPolicy: "no-cache",
      variables: {
        // clickUrl: url,
        imageId: image,
      },
      errorPolicy: "all",
    });
  }
}
