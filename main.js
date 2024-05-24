
let total = 0
const mainFn = (data) => {
  
  let newData = [...data]
  
  if(parseInt(newData[0].split('\t')[0]) == 0){
    total = 0
  }
  if (newData[1].split('\t')[2] == 'Trượt' && newData[2].split('\t')[2] == 'Trượt' && newData[3].split('\t')[2] == 'Trượt' && newData[4].split('\t')[2] == 'Trúng'){
    return `Đánh X1 ${newData[0].split('\t')[3]}`
  }
  if (newData[1].split('\t')[2] == 'Trượt' && newData[2].split('\t')[2] == 'Trượt' && newData[3].split('\t')[2] == 'Trượt' && newData[4].split('\t')[2] == 'Trượt' && newData[5].split('\t')[2] == 'Trúng'){
    return `Đánh X2 ${newData[0].split('\t')[3]}`
  }
  if (newData[1].split('\t')[2] == 'Trúng' && newData[2].split('\t')[2] == 'Trượt' && newData[3].split('\t')[2] == 'Trượt' && newData[4].split('\t')[2] == 'Trượt' && newData[5].split('\t')[2] == 'Trúng'){
    total = total + 1
    return `Trúng ${total}`
  }

  if (newData[1].split('\t')[2] == 'Trúng' && newData[2].split('\t')[2] == 'Trượt' && newData[3].split('\t')[2] == 'Trượt' && newData[4].split('\t')[2] == 'Trượt' && newData[5].split('\t')[2] == 'Trượt' && newData[6].split('\t')[2] == 'Trúng'){
    total = total + 1
    return `Trúng ${total}`
  }

  if (newData[1].split('\t')[2] == 'Trúng' && newData[2].split('\t')[2] == 'Trượt' && newData[3].split('\t')[2] == 'Trượt' && newData[4].split('\t')[2] == 'Trượt' && newData[5].split('\t')[2] == 'Trượt' && newData[6].split('\t')[2] == 'Trượt'){
    total = total - 3
    return `Trượt ${total}`
  }

  return ''
};


const handleChangeData = (data => {
      return mainFn(data)
  }
)

module.exports = handleChangeData