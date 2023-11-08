//จงเขียน Function เมื่ออเมริกาต้องการส่งข้อความไปให้กับประเทศอินเดียแต่ไม่อยากให้ประเทศอื่นรู้ว่าส่งข้อความอะไรไป อเมริกาจึงต้องการมีการเข้ารหัสลับโดยใช้ตัวอักษรที่ตรงกันข้ามกับภาษาอังกฤษมีทั้งหมด 26 ตัวอักษร A อยู่ตำแหน่งที่ 1 ซึ่งจะคู่กับตัวอักษรที่อยู่ตำแหน่งที่ 14 นั่นคือ N ถ้าหากอเมริกาส่งตัวอักษรตัวA แสดงอินเดียต้องรับรู้ว่าเป็น N
// #alphabet lowwerCase
const alphabetB = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphabet = alphabetB.map(element => {
    return element.toLocaleLowerCase();
})




//
function hackPass(password) {
    let targetResult = [];
    for (const s of password) {

        if (s !== ' ') { //ส่วนนี้ตรวจสอบช่องว่าง ถ้ามีให้ข้ามไป ถ้าเป็นอักษร ให้ทำในนี้
            let sIndex = alphabet.indexOf(s); // หาลำดับมันก่อน
            let targetIndex = sIndex + 13; // เคลื่อนไปอีก 13 นั่นหละค่าที่เราต้องการแก้รหัส
            //"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"
            //"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
            if (targetIndex <= alphabet.length - 1) { // ตรวจสอบว่า ตำแหน่งที่จะไป มันเกิดกว่า 0-25 26 ตัวไหม
                targetValue = alphabet[targetIndex]; // 0-25 ดูว่าจะตรงกับตัวอะไร
                targetResult.push(targetValue); // อัดมันเข้าไปในผลลัพธ์
            } else {
                let subIndex = (targetIndex - (alphabet.length)) // พวกเกินกว่า 0-25 ลบมันออกด้วย 26 ไปเริ่มนับ 0 ใหม่
                let subValue = alphabet[subIndex]; // หาดูดิ๊ว่าตรงกับตัวไหน พวกที่เกิน z มา
                targetResult.push(subValue); // อัดมันเข้าไปในผลลัพธ์
            }
        } else { // ส่วนนี้ข้ามมาจากตรวจช่องว่างพบ
            targetResult.push(' ') // push ช่องว่างเข้าไป
        }

    }
    return targetResult.join(''); // join ซะหน่อย แปลง array เป็นข้อความต่อเนื่องที่ตัวติดๆกัน

}

const tR = hackPass('v ybir lbh') // คัดลอก เข้าไปเป็นตัวแปร tR จะได้เรียกดูบน console ได้
console.log(tR);
console.log(hackPass('nopqrstuvwxyz')); // พวกนี้มันพวกผี แสดงให้เห็นแต่จับต้องไม่ได้
console.log(hackPass('abcdefghijklm'));
