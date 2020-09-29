//公用方法

export const ImgUrlFiter = param => param && param.replace("{size}", 400)

//歌手分类
export const SortSinger = data => {
    if (!data) return []
    let listArr = []
    data.forEach((item, index) => {
        let obj = []
        for (let i = 0; i < listArr.length; i++) {
            //对比放入相同的字段
            if (listArr[i][0].classname.slice(0, 2) == item.classname.slice(0, 2)) {
                listArr[i].push(item)
                return
            }
        }
        //第一次对比没有参照，放入参照
        obj.push(item)
        listArr.push(obj)
    });
    return listArr
}