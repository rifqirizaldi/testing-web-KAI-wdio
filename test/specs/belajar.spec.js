import Page from "../pageobjects/page.js";
import { $ } from '@wdio/globals'

const page = new Page()
const button = '.btn'
const email = 'input[type="email"]'
const nama = 'input[id="member_nama"]'
const no_id =  'input[id="member_notandapengenal"]'
const no_hp = 'input[id="member_nohp"]'
const pass = 'input[id="member_pass1"]'
const repass = 'input[id="member_pass2"]'


// it("Testing open instagram signup page", async function () {
//     await page.open()
//     await new Promise(r=>setTimeout(r,5000))
    
// })

describe("Testing user registration page NEGATIVE TEST",()=>{
    it("UR-001 Tanpa memasukkan data sama sekali",async function(){
        await page.open()
        await $(button).click()

        const homePageTitle = await $('.title-box')
        // const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Biodata')
        await new Promise(r=>setTimeout(r,2000))
    })

    it("UR-002 Hanya memasukkan data email",async function(){
        await page.open()
        await $(email).setValue("harykane@gmail.com")
        await $(button).click()

        const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Biodata')
        await new Promise(r=>setTimeout(r,2000))
    })

    it("UR-003 Hanya memasukkan data email salah",async function(){
        await page.open()
        await $(email).setValue("harykane")
        await $(button).click()

        // const homePageTitle = await $('div.help-block ul.list-unstyled li')
        const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Biodata')
        await new Promise(r=>setTimeout(r,2000))
    })

    it("UR-004 Hanya memasukkan data nomor ID",async function(){
        await page.open()
        await $(no_id).setValue("35153010000018")
        await $(button).click()

        const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Biodata')
        await new Promise(r=>setTimeout(r,2000))
    })

    it("UR-005 Hanya memasukkan data no ID kurang 1 digit",async function(){
        await page.open()
        await $(no_id).setValue("3515301000001")
        await $(button).click()

        const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Biodata')
        await new Promise(r=>setTimeout(r,2000))
    })

    it("UR-006 Hanya memasukkan data password",async function(){
        try {
            await page.open()
            await $(pass).setValue("Wibujag0")
            await $(button).click()

            const homePageTitle = await $(`.title-box`)
            expect(homePageTitle).toHaveText('Otentikasi')
            await new Promise(r=>setTimeout(r,2000))
        } catch (error) {
            console.log(error)
        }
        
    })

    it("UR-007 Hanya memasukkan data repassword yang tidak sama dengan password",async function(){
        await page.open()
        await $(pass).setValue("Wibujag0")
        await $(repass).setValue("wibujag0")
        await $(button).click()

        const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Otentikasi')
        await new Promise(r=>setTimeout(r,2000))
    })

    it("UR-008 Hanya memasukkan data no HP",async function(){
        await page.open()
        await $(no_hp).setValue("087703065655")
        await $(button).click()

        const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Biodata')
        await new Promise(r=>setTimeout(r,2000))
    })

    it("UR-009 Hanya memasukkan data email invalid dan nama", async function(){
        await page.open()
        await $(email).setValue("harykane")
        await $(nama).setValue("Rifaldi")
        await $(button).click()

        const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Biodata')
        await new Promise(r=>setTimeout(r,2000))
    })

    it("UR-010 Hanya memasukkan data nik invalid dan nama", async function(){
        await page.open()
        await $(no_id).setValue("353010101010")
        await $(nama).setValue("Rifaldi")
        await $(button).click()

        const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Biodata')
        await new Promise(r=>setTimeout(r,2000))
    })

    it("UR-010 Hanya memasukkan data nik invalid dan email invalid", async function(){
        await page.open()
        await $(no_id).setValue("353010101010")
        await $(email).setValue("harykane")
        await $(button).click()

        const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Biodata')
        await new Promise(r=>setTimeout(r,2000))
    })

    it("UR-011 Hanya memasukkan data nama, nik invalid, dan email invalid", async function(){
        await page.open()
        await $(no_id).setValue("353010101010")
        await $(email).setValue("harykane")
        await $(nama).setValue('Rifaldi')
        await $(button).click()

        const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Biodata')
        await new Promise(r=>setTimeout(r,2000))
    })

    it("UR-012 Hanya memasukkan data nama, password, nik invalid dan email invalid", async function(){
        await page.open()
        await $(no_id).setValue("353010101010")
        await $(email).setValue("harykane")
        await $(nama).setValue("Rifaldi")
        await $(pass).setValue('Wibujag0')
        await $(button).click()

        const homePageTitle = await $(`.title-box`)
        expect(homePageTitle).toHaveText('Biodata')
        await new Promise(r=>setTimeout(r,2000))
    })
})
