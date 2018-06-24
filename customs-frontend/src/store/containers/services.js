import API from '../_common/services/api'

export const containersService = {
    getContainers(query) {
        return API.get(`/containers?${query}`)
        return {data: [
                {
                    "id": "TCLU87452645",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "MAR",
                    "destination": "BCN",
                    "weight": 11.5,
                    "sts": "FCL",
                    "type": 5321
                },
                {
                    "id": "TCLU67573131",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "MAR",
                    "destination": "BCN",
                    "weight": 32.5,
                    "sts": "FCL",
                    "type": 6916
                },
                {
                    "id": "TCLU84304817",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "MAR",
                    "destination": "BCN",
                    "weight": 24.3,
                    "sts": "FCL",
                    "type": 3208
                },
                {
                    "id": "TCLU89382384",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "MAR",
                    "destination": "BCN",
                    "weight": 9.2,
                    "sts": "FCL",
                    "type": 4158
                },
                {
                    "id": "TCLU51828467",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "MAR",
                    "destination": "BCN",
                    "weight": 10.2,
                    "sts": "FCL",
                    "type": 9300
                },
                {
                    "id": "TCLU36705245",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "MAR",
                    "destination": "VLC",
                    "weight": 32.9,
                    "sts": "FCL",
                    "type": 3375
                },
                {
                    "id": "TCLU61258893",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "MAR",
                    "destination": "VLC",
                    "weight": 30.2,
                    "sts": "FCL",
                    "type": 2603
                },
                {
                    "id": "TCLU51144491",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "MAR",
                    "destination": "VLC",
                    "weight": 30.8,
                    "sts": "FCL",
                    "type": 2091
                },
                {
                    "id": "TCLU40128772",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "MAR",
                    "destination": "VLC",
                    "weight": 9.8,
                    "sts": "FCL",
                    "type": 5472
                },
                {
                    "id": "TCLU85624898",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "TUN",
                    "destination": "BRV",
                    "weight": 9.1,
                    "sts": "FCL",
                    "type": 4773
                },
                {
                    "id": "TCLU80041552",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "KHO",
                    "destination": "BRV",
                    "weight": 30.5,
                    "sts": "FCL",
                    "type": 3656
                },
                {
                    "id": "TCLU84095677",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "BCN",
                    "destination": "BRV",
                    "weight": 12.2,
                    "sts": "FCL",
                    "type": 2820
                },
                {
                    "id": "TCLU80991543",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "BCN",
                    "destination": "BRV",
                    "weight": 24.1,
                    "sts": "FCL",
                    "type": 6195
                },
                {
                    "id": "TCLU75647112",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "BCN",
                    "destination": "BRV",
                    "weight": 24.5,
                    "sts": "FCL",
                    "type": 3070
                },
                {
                    "id": "TCLU27032254",
                    "owner": "MSC",
                    "category": "IMPORT",
                    "origin": "BCN",
                    "destination": "BRV",
                    "weight": 9.7,
                    "sts": "FCL",
                    "type": 1224
                },
                {
                    "id": "TEM69248143",
                    "owner": "SGL",
                    "category": "IMPORT",
                    "origin": "BCN",
                    "destination": "YUZ",
                    "weight": 23.8,
                    "sts": "FCL",
                    "type": 8242
                },
                {
                    "id": "TEM74309495",
                    "owner": "SGL",
                    "category": "IMPORT",
                    "origin": "BCN",
                    "destination": "YUZ",
                    "weight": 21,
                    "sts": "FCL",
                    "type": 4171
                },
                {
                    "id": "TEM78032943",
                    "owner": "SGL",
                    "category": "IMPORT",
                    "origin": "BCN",
                    "destination": "YUZ",
                    "weight": 31.3,
                    "sts": "FCL",
                    "type": 9163
                },
                {
                    "id": "TEM44613449",
                    "owner": "SGL",
                    "category": "IMPORT",
                    "origin": "BCN",
                    "destination": "YUZ",
                    "weight": 29.4,
                    "sts": "FCL",
                    "type": 4000
                },
                {
                    "id": "TEM69185144",
                    "owner": "SGL",
                    "category": "IMPORT",
                    "origin": "BCN",
                    "destination": "YUZ",
                    "weight": 29.6,
                    "sts": "FCL",
                    "type": 3125
                },
                {
                    "id": "CAIU34180214",
                    "owner": "MSK",
                    "category": "IMPORT",
                    "origin": "VLC",
                    "destination": "YUZ",
                    "weight": 21.3,
                    "sts": "FCL",
                    "type": 5884
                },
                {
                    "id": "CAIU71129092",
                    "owner": "MSK",
                    "category": "TRANSSHIP",
                    "origin": "VLC",
                    "destination": "BCN",
                    "weight": 24.8,
                    "sts": "FCL",
                    "type": 4398
                },
                {
                    "id": "CAIU83253605",
                    "owner": "MSK",
                    "category": "TRANSSHIP",
                    "origin": "VLC",
                    "destination": "BCN",
                    "weight": 19.1,
                    "sts": "FCL",
                    "type": 7303
                },
                {
                    "id": "CAIU64328913",
                    "owner": "MSK",
                    "category": "TRANSSHIP",
                    "origin": "VLC",
                    "destination": "BCN",
                    "weight": 11.2,
                    "sts": "FCL",
                    "type": 6472
                },
                {
                    "id": "CAIU77918090",
                    "owner": "MSK",
                    "category": "TRANSSHIP",
                    "origin": "VLC",
                    "destination": "BCN",
                    "weight": 24,
                    "sts": "FCL",
                    "type": 6878
                },
                {
                    "id": "TCLU12158775",
                    "owner": "MSK",
                    "category": "TRANSSHIP",
                    "origin": "VLC",
                    "destination": "BCN",
                    "weight": 28.2,
                    "sts": "FCL",
                    "type": 8246
                },
                {
                    "id": "TCLU59199144",
                    "owner": "MSK",
                    "category": "TRANSSHIP",
                    "origin": "VLC",
                    "destination": "BCN",
                    "weight": 23.2,
                    "sts": "FCL",
                    "type": 7787
                },
                {
                    "id": "TCLU36932349",
                    "owner": "SGL",
                    "category": "TRANSSHIP",
                    "origin": "VLC",
                    "destination": "MAR",
                    "weight": 9.8,
                    "sts": "FCL",
                    "type": 9525
                },
                {
                    "id": "TCLU58913678",
                    "owner": "SGL",
                    "category": "TRANSSHIP",
                    "origin": "PSE",
                    "destination": "MAR",
                    "weight": 21.6,
                    "sts": "FCL",
                    "type": 5302
                },
                {
                    "id": "TCLU42406555",
                    "owner": "SGL",
                    "category": "TRANSSHIP",
                    "origin": "PSE",
                    "destination": "MAR",
                    "weight": 25.8,
                    "sts": "FCL",
                    "type": 7194
                },
                {
                    "id": "TCLU67006225",
                    "owner": "SGL",
                    "category": "TRANSSHIP",
                    "origin": "PSE",
                    "destination": "MAR",
                    "weight": 11.7,
                    "sts": "FCL",
                    "type": 9678
                },
                {
                    "id": "TCLU43294976",
                    "owner": "MSC",
                    "category": "TRANSSHIP",
                    "origin": "PSE",
                    "destination": "MAR",
                    "weight": 17,
                    "sts": "FCL",
                    "type": 3314
                },
                {
                    "id": "TCLU57141739",
                    "owner": "MSC",
                    "category": "TRANSSHIP",
                    "origin": "PSE",
                    "destination": "MAR",
                    "weight": 13.1,
                    "sts": "FCL",
                    "type": 3074
                },
                {
                    "id": "TCLU86180379",
                    "owner": "MSC",
                    "category": "TRANSSHIP",
                    "origin": "PSE",
                    "destination": "MAR",
                    "weight": 14.1,
                    "sts": "FCL",
                    "type": 3765
                }
            ]}
    }
}
