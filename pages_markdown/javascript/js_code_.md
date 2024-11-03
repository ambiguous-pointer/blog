```js
let { rows: data } = {
    total: 34,
    rows: [.....]
}
let target = [];
let tartStr = '';
data.forEach((item) => {
    let temp = {
        id: item?.id ?? -1,
        enterId: item?.enterId ?? -1,
        feedGroAgreeId: item.feedGroAgree?.id ?? -1,
        feedGroAgreeEnterId: item.feedGroAgree?.enterId ?? -1,
        batchNumber: item.feedGroAgree?.batchNumber ?? -1,
        reloadingDate: item.feedGroAgree?.reloadingDate ?? -1,
        nextReloadingDate: item.feedGroAgree?.nextReloadingDate ?? -1,
    };
    target.push(temp);
    tartStr += JSON.stringify(temp) + '\n';
});
//   console.log(JSON.stringify(target));
```