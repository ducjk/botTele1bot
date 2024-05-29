const regex = /\s+/g; // Khớp với một hoặc nhiều khoảng trắng
let total2 = 0
let total3 = 0
let total4 = 0


const mainFn2 = (mang0, mang1, mang2, mang3, mang4, mang5) => {
  if(parseInt(mang0[0]) == 1){
    total2 = 0
  }

  // Trượt 2
  if (mang1[2] == 'Trượt' && mang2[2] == 'Trượt' && mang3[2] == 'Trúng'){
    return `Đánh trượt 2: ${mang0[4]}`
  }
  
  if (mang1[2] == 'Trúng' && mang2[2] == 'Trượt' && mang3[2] == 'Trượt' && mang4[2] == 'Trúng'){
    total2 = total2 + 1
    return `Trúng trượt 2: ${total2}`
  }

  if (mang1[2] == 'Trúng' && mang2[2] == 'Trượt' && mang3[2] == 'Trượt' && mang4[2] == 'Trượt' && mang5[2] == 'Trúng'){
    total2 = total2 - 1
    return `Trượt 2: ${total2}`
  }

  return ''
};

const mainFn3 = (mang0, mang1, mang2, mang3, mang4, mang5, mang6) => {
  if(parseInt(mang0[0]) == 1){
    total3 = 0
  }

  

  // Trượt 3

  if (mang1[2] == 'Trượt' && mang2[2] == 'Trượt' && mang3[2] == 'Trượt' && mang4[2] == 'Trúng'){
    return `Đánh trượt 3: ${mang0[4]}`
  }
  
  if (mang1[2] == 'Trúng' && mang2[2] == 'Trượt' && mang3[2] == 'Trượt' && mang4[2] == 'Trượt' && mang5[2] == 'Trúng'){
    total3 = total3 + 1
    return `Trúng trượt 3: ${total3}`
  }

  if (mang1[2] == 'Trúng' && mang2[2] == 'Trượt' && mang3[2] == 'Trượt' && mang4[2] == 'Trượt' && mang5[2] == 'Trượt' && mang6[2] == 'Trúng'){
    total3 = total3 - 1
    return `Trượt 3: ${total3}`
  }


  return ''
};

const mainFn4 = (mang0, mang1, mang2, mang3, mang4, mang5, mang6) => {
  if(parseInt(mang0[0]) == 1){
    total4 = 0
  }

  // Trươt 4
  if (mang1[2] == 'Trượt' && mang2[2] == 'Trượt' && mang3[2] == 'Trượt' && mang4[2] == 'Trượt' && mang5[2] == 'Trúng'){
    return `Đánh trượt 4: ${mang0[4]}`
  }
  
  if (mang1[2] == 'Trúng' && mang2[2] == 'Trượt' && mang3[2] == 'Trượt' && mang4[2] == 'Trượt' && mang5[2] == 'Trượt' && mang6[2] == 'Trúng'){
    total4 = total4 + 1
    return `Trúng trượt 4: ${total4}`
  }

  if (mang1[2] == 'Trúng' && mang2[2] == 'Trượt' && mang3[2] == 'Trượt' && mang4[2] == 'Trượt' && mang5[2] == 'Trượt' && mang6[2] == 'Trượt'){
    total4 = total4 - 1
    return `Trượt 4: ${total4}`
  }

  return ''
};


const handleChangeData = (data => {
  let mang0 = data[0].split(regex)
  let mang1 = data[1].split(regex)
  let mang2 = data[2].split(regex)
  let mang3 = data[3].split(regex)
  let mang4 = data[4].split(regex)
  let mang5 = data[5].split(regex)
  let mang6 = data[6].split(regex)

  const result2 = mainFn2(mang0, mang1, mang2, mang3, mang4, mang5)
  const result3 = mainFn3(mang0, mang1, mang2, mang3, mang4, mang5, mang6)
  const result4 = mainFn4(mang0, mang1, mang2, mang3, mang4, mang5, mang6)

  return `${result2} \n ${result3} \n ${result4}`
}
)


module.exports = handleChangeData