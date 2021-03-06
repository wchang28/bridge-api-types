export interface ResponseBase {
    success: boolean;
    status: number;
}
export interface Error {
    name?: string;
    message?: string;
}
export interface BundleResponse<B> extends ResponseBase {
    bundle?: B;
    total?: number;
}
export declare type ErrorResponse = BundleResponse<Error>;
export declare type StateCode = ('AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'GU' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY');
export declare type GeoCoordinate = [number, number];
export declare namespace PublicData {
    type AirConditioning = "Central" | "Evaporative Cooler" | "None" | "Other" | "Packaged AC Unit" | "Refrigeration" | "Wall Unit" | "Window Unit" | "Yes";
    type ArchitecturalStyle = "Bungalow" | "Cape Cod" | "Colonial" | "Contemporary" | "Conventional" | "Custom" | "Log Cabin/Rustic" | "Modern" | "Other" | "Prefab" | "Raised Ranch" | "Ranch/Rambler" | "Traditional";
    type AreaType = "Adjusted Building Area" | "Apartment" | "Attic" | "Attic Finished" | "Attic Unfinished" | "Balcony/Overhang" | "Base Building Area" | "Basement" | "Basement Finished" | "Basement Full" | "Basement Partial" | "Basement Unfinished" | "Bonus Room" | "Canopy/Awning" | "Covered Porch" | "Effective Building Area" | "Enclosed Porch" | "Family Room/Den" | "Finished Building Area" | "Floor 1" | "Floor 1 Finished" | "Floor 2" | "Floor 3" | "Game Room/Recreation" | "Glass Enclosed Porch" | "Gross Building Area" | "Half Story" | "Heated Building Area" | "Lanai" | "Living Building Area" | "Living Building Area Finished" | "Living Building Area Unfinished" | "Loft" | "Loft Garage" | "Lower Level" | "Media Room/Home Theater" | "No Basement" | "Open Porch" | "Perimeter Building Area" | "Porch" | "Screened Porch" | "Study/Library" | "Sun Room" | "Total Building Area" | "Upper Story" | "Upper Story Finished" | "Upper Story Unfinised" | "Utility/Storage Room" | "Zillow Calculated Finished Area";
    type BuildingCondition = "Average" | "Excellent" | "Fair" | "Good" | "Poor";
    type BuildingQuality = "A" | "A+" | "A-" | "B" | "B+" | "B-" | "C" | "C+" | "C-" | "D" | "D+" | "D-";
    type DocumentType = "Administrators Deed" | "Affidavit" | "Affidavit - Death of Joint Tenant" | "Affidavit - Death of Life Tenant" | "Agreement of Sale (Agreement for Deed)" | "Bargain & Sale Deed" | "Beneficiary Deed" | "Cancellation of Lis Pendens" | "Cancellation of Notice of Default" | "Cash Sale Deed" | "Certificate of Redemption" | "Certificate of Title" | "Certificate of Transfer" | "Commissioners Deed" | "Condominium Deed" | "Contract of Sale" | "Corporation Deed" | "Correction Deed" | "Court Order/Action" | "Deed" | "Deed in Lieu of Foreclosure" | "Deed of Distribution" | "Deed of Trust/Mortgage" | "Executors Deed/Executrixs Deed" | "Fiduciary Deed" | "Foreclosure Auction - Status Sold" | "Foreclosure Deed/Certificate" | "Gift Deed" | "Grant Deed" | "Individual Deed" | "Intrafamily Transfer & Dissolution" | "Joint Tenancy Deed" | "Judgment of Foreclosure" | "Land Contract" | "Life Estate Quitclaim Deed" | "Limited Warranty Deed" | "Newly Filed Complaint/Petition to Foreclose" | "Non-Warranty Deed" | "Notice of Default" | "Notice of Lis Pendens" | "Notice of Sale (Trustee Sale" | "Other" | "Partnership Deed" | "Personal Representatives Deed" | "Power of Attorney to Foreclose Mortgage" | "Quitclaim Deed" | "Re-Recorded Deed" | "Receivers Deed" | "Redemption Deed" | "Sale Cancelled" | "Sale Change (Rescheduled or Postponed)" | "Sheriffs Deed" | "Special Limited Warranty Deed" | "Special Warranty Deed" | "Survivorship Deed" | "Survivorship Warranty Deed" | "Tax Deed" | "Transfer on Death Deed" | "Trustees Deed (foreclosure sale transfer)" | "Trustees Deed (non-foreclosure)" | "Vendors Lien Deed" | "Warranty Deed";
    type Fireplace = "Electric";
    type Foundation = "Concrete" | "Concrete Block" | "Crawl Space/Raised" | "Footing" | "Masonry" | "Other" | "Piers" | "Retaining Wall" | "Slab" | "Wood";
    type GarageType = "Attached" | "Built in" | "Carport" | "Covered" | "Detached" | "Finished" | "Garage" | "Mixed" | "None" | "Open" | "Tuckunder" | "Underground/basement" | "Unfinished" | "Yes";
    type Heating = "Baseboard" | "Central" | "Electric" | "Forced air" | "Gas" | "Gravity" | "Heat Pump" | "Hot Water" | "None" | "Oil" | "Other" | "Radiant" | "Solar" | "Vent" | "Yes";
    type LandUseCode = "AG120" | "MS000" | "MS199" | "RI101" | "RR000" | "RR101" | "RR102" | "RR103" | "RR104" | "RR105" | "RR106" | "RR108" | "RR109" | "RR113" | "RR114" | "RR115" | "RR116" | "RR118" | "RR999" | "VL000" | "VL101" | "VL102" | "VL103" | "VL107";
    type LandUseDescription = "Bungalow" | "Cluster Home" | "Commercial Vacant Land" | "Condominium" | "Duplex (2 Units" | "Improved" | "Inferred Single Family Residential" | "Irrigation" | "Miscellaneous" | "Multi-Family Vacant Land" | "Patio Home" | "Residential General" | "Residential Vacant Land" | "Row House" | "Rural Residence" | "Single Family Residential" | "Townhouse" | "Vacant Land - General" | "Zero Lot Line";
    type LandUseGeneral = "AG" | "MS" | "RI" | "RR" | "VL";
    type LenderType = "Bank" | "Credit Union" | "Et Al" | "Finance company" | "Government entity" | "Insurance company" | "Internet Storefront" | "Lending company" | "Mortgage company" | "Other" | "Private Party" | "REO/Foreclosure Company" | "Reverse Mortgage Lender" | "Seller" | "Subprime Lender" | "Unknown";
    type OccupancyStatus = "Assumed Owner Occupancy" | "Homestead Property" | "Owner Occupied or Primary Residence" | "Second Home";
    type Sewer = "Municipal/Public" | "None" | "Septic" | "Storm" | "Yes";
    type TransactionCategory = "deed" | "foreclosure" | "loan";
    type TransactionRecordType = "Primary Record";
    type Water = "Municipal/Public" | "None" | "Well" | "Yes";
    interface Address {
        full?: string;
        house?: string;
        houseExt?: string;
        streetPre?: string;
        street?: string;
        streetSuffix?: string;
        streetPost?: string;
        unitType?: string;
        unit?: string;
        city?: string;
        state?: StateCode;
        zip?: string;
        zip4?: string;
    }
    interface Legal {
        lotDescription?: string;
        lot?: string;
        otherLot?: string;
        block?: string;
        subdivisionName?: string;
        unit?: string;
        section?: string;
        phase?: string;
        tract?: string;
        district?: string;
        municipality?: string;
        city?: string;
        township?: string;
    }
    interface Building {
        baths?: number;
        bedrooms?: number;
        effectiveYearBuilt?: number;
        fullBaths?: number;
        totalRooms?: number;
        totalStories?: string;
        yearBuilt?: number;
    }
    interface BuildingDetail extends Building {
        noOfUnits?: number;
        occupancyStatus?: OccupancyStatus;
        class?: string;
        classDescription?: string;
        quality?: BuildingQuality;
        condition?: BuildingCondition;
        architecturalStyle?: ArchitecturalStyle;
        heating?: Heating;
        airConditioning?: AirConditioning;
        foundation?: Foundation;
        fireplace?: Fireplace;
        water?: Water;
        sewer?: Sewer;
        kitchens?: number;
        comments?: string;
    }
    interface Area {
        type?: AreaType;
        areaSquareFeet?: number;
    }
    interface Pool {
        type?: string;
        size?: number;
    }
    interface Garage {
        type?: GarageType;
        carCount?: number;
        areaSquareFeet?: number;
    }
    interface ParcelIdentifier {
        PUID: string;
        parcelID: string;
        parcelUrl?: string;
        transactionsUrl?: string;
        assessmentsUrl?: string;
    }
    interface ParcelCommon {
        id: string;
        parcelID: string;
        fips?: string;
        apn?: string;
        county?: string;
        state?: StateCode;
        landUseGeneral?: LandUseGeneral;
        landUseCode?: LandUseCode;
        landUseDescription?: LandUseDescription;
        zoningCode?: string;
        zoningDescription?: string;
        lotSizeAcres?: number;
        lotSizeSquareFeet?: number;
        lotSizeFrontage?: number;
        lotSizeDepth?: number;
        lotSizeIrregular?: string;
        lotTopography?: string;
        address?: Address;
        legal?: Legal;
        coordinates?: GeoCoordinate;
        numberOfBuildings?: number;
        building?: BuildingDetail[];
        areas?: Area[];
        pools?: Pool[];
        garages?: Garage[];
        ownerName?: string[];
        zpid?: string;
        url?: string;
    }
    interface AssessmentData {
        censusTract?: string;
        taxID?: string;
        taxAmount?: number;
        taxYear?: number;
        taxExemption?: string;
        year?: number;
        landValue?: number;
        improvementValue?: number;
        totalValue?: number;
        marketValueYear?: number;
        marketLandValue?: number;
        marketImprovementValue?: number;
        marketTotalValue?: number;
    }
    interface TransactionParcel extends Address {
        parcelID?: string;
        apn?: string;
        fips?: string;
        coordinates?: GeoCoordinate;
    }
    interface Parcel extends ParcelCommon {
        transactionsUrl?: string;
        assessmentsUrl?: string;
        comparablesUrl?: string;
    }
    interface Assessment extends ParcelCommon, AssessmentData {
    }
    interface Transaction {
        id: string;
        fips?: string;
        county?: string;
        state?: StateCode;
        category?: TransactionCategory;
        recordType?: TransactionRecordType;
        recordingDate?: Date | string;
        recordingBookNumber?: string;
        recordingPageNumber?: string;
        documentTypeCode?: number;
        documentType?: DocumentType;
        documentDate?: Date | string;
        signatureDate?: Date | string;
        effectiveDate?: Date | string;
        buyerVesting?: number;
        buyerMultiVesting?: string;
        partialInterestTransfer?: string;
        partialInterestTransferPercent?: number;
        salesPrice?: number;
        cityTransferTax?: number;
        countyTransferTax?: number;
        stateTransferTax?: number;
        totalTransferTax?: number;
        intraFamilyTransfer?: string;
        transferTaxExempt?: string;
        borrowerVesting?: number;
        lenderName?: string[];
        titleCompanyName?: string;
        lenderType?: LenderType;
        loanAmount?: number;
        loanAmountDescription?: string;
        maxLoanAmount?: number;
        loanTypeCode?: string;
        loanClosedOrOpenEndedCode?: string;
        loanRateTypeCode?: string;
        loanDueDate?: Date | string;
        loanTermMonths?: number;
        loanTermYears?: number;
        initialInterestRate?: number;
        unpaidBalance?: number;
        totalDelinquentAmount?: number;
        delinquentAsOfDate?: Date | string;
        installmentAmount?: number;
        installmentDueDate?: Date | string;
        origLoanAmount?: number;
        origLoanDocumentDate?: Date | string;
        origLoanRecordingDate?: Date | string;
        origLoanDocumentNumber?: string;
        occupancyStatus?: OccupancyStatus;
        trusteeSaleNumber?: string;
        auctionAddress?: string;
        auctionDate?: Date | string;
        startingBid?: number;
        buyerName?: string[];
        sellerName?: string[];
        parcels?: TransactionParcel[];
        url?: string;
    }
    interface Comp {
        id: string;
        address?: {
            full?: string;
        };
        apn?: string;
        areas?: Area[];
        building?: Building[];
        buyerName?: string[];
        city?: string;
        coordinates?: GeoCoordinate;
        county?: string;
        documentType?: DocumentType;
        documentDate?: Date | string;
        fips?: string;
        garages?: Garage[];
        landUseGeneral?: LandUseGeneral;
        landUseCode?: LandUseCode;
        legal: Legal;
        lenderName?: string[];
        lenderType?: LenderType;
        loanAmount?: number;
        loanAmountDescription?: string;
        lotSizeAcres?: number;
        lotSizeSquareFeet?: number;
        pools?: Pool[];
        recordingBookNumber?: string;
        recordingPageNumber?: string;
        salesPrice?: number;
        sellerName?: string[];
        state?: StateCode;
        zip?: string;
        zip4?: string;
        distanceFrom?: number;
        transactionsUrl?: string;
        assessmentsUrl?: string;
        url?: string;
    }
}
export declare namespace ZEstimates {
    interface EstimateValues {
        zestimate?: number;
        upper?: number;
        lower?: number;
    }
    interface DatedEstimate extends EstimateValues {
        date?: Date | string;
    }
    interface YearEstimate extends EstimateValues {
        year?: number;
    }
    interface ZEstimateRecordBase {
        id: string;
        zpid: string;
        address?: string;
        coordinates?: GeoCoordinate;
        zillowUrl?: string;
    }
    interface ZEstimate extends ZEstimateRecordBase, DatedEstimate {
        rental?: DatedEstimate;
        foreclosureZestimate?: number;
    }
    interface AnnualZEstimate extends ZEstimateRecordBase, YearEstimate {
    }
}
