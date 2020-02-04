const bcrypt = require('bcrypt')
const models = require('../models')
const passwordHash = async(plainText) => await bcrypt.hash(plainText, 10)
const findCompanyId = async(contractorname) => {
    let company = await models.Company.findOne({ where: { company_name } })
    return company.id
}

const findAccessId = async(access_desc) => {
    let access = await models.Access_Levels.findOne({ where: { access_desc } })
    return access.id
}

const findUserId = async(username) => {
    let user = await models.User.findOne({ where: { username } })
    return user.id
}

'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return Promise.all([
            await queryInterface.bulkInsert(
                'Access_Levels', [{
                        access_desc: 'Admin',
                        createdAt: new Date(),
                        updatedAt: new Date()
                    },
                    {
                        access_desc: 'Contractors',
                        createdAt: new Date(),
                        updatedAt: new Date()
                    },
                    {
                        access_desc: 'Operators',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    }

                ]
            ),
            await queryInterface.bulkInsert(
                'Contractors', [{
                        contractorname: 'TransOcean',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Noble',
                        createdAt: new Date(),
                        updatedAt: new Date(),   
                    },
                    {
                        contractorname: 'Helmerich & Payne',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Nabors',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Maersk',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Ensign',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Pacific Drilling',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Patterson',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Precision',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Pioneer',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Diamond',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Rowan',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Stena Drilling',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Tesco Drilling',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Prosafe',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Abbot Group',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Acteon',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Akita Drilling',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Altinex',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Atwood Oceanics',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'China Oilfield Services',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Dolphin Drilling',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Egyption Drilling Company',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Global Marine Drilling',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Japan Drilling Co',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Parker Drilling',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'PetroMena',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'REamco',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Seadrill',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Coastal Drilling',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Frigstad Offshore',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'KCA Deutag',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Marine Drilling',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'National Drilling Services',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Neptune',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        contractorname: 'Ocean Rig',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },

                ]
            ),
           
            await queryInterface.bulkInsert(
                'Operators', [{
                        operatorname: 'admin@admin.com',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        operatorname: 'contractor@contractor.com',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        operatorname: 'operator@operator.com',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    }
                ]
            ),
            await queryInterface.bulkInsert(
                'Requestors', [{
                        email: 'admin@admin.com',
                        password: '1234',
                        phonenum: '2811234567',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        email: 'contractor@contractor.com',
                        password: '5678',
                        phonenum: '2812811234',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        email: 'operator@operator.com',
                        password: '91011',                        
                        phonenum: '7131234567',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    }
                ]
            ),
            await queryInterface.bulkInsert(
                'Rigs', [{
                        rigname: 'Olympus',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Pontus',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Poseidon',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Maersk Developer',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Ursa',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Perdido',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Q4000',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Brava Star',
                        region: 'Brazil',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Ocean Endeavor',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'CWI',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Thalassa',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'DS-10',
                        region: 'Brazil',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Nautilus',
                        region: 'Malaysia',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Ensign 771',
                        region: 'Brazil',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'OWIRS',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Mykonos',
                        region: 'Brazil',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'West Capella',
                        region: 'Malaysia',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Naga 6',
                        region: 'Malaysia',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Corcovado',
                        region: 'Brazil',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Ocean Valiant',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'San Antonio',
                        region: 'Malaysia',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Proteus',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Bully 1',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Bully 2',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Qatar Unit 1',
                        region: 'Malaysia',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Frontier Energy',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Mars',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'NGT 1',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'NGT 2',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        rigname: 'Auger',
                        region: 'USA',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                ]
            ),
            
        ])
    }
};