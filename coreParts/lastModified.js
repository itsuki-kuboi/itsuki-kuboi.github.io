document.write(`
<!-- 更新日時 -->
&copy; 2022 Itsuki KUBOI, Last-Modified:
<time id="modify"></time>
<script>
/* 更新日の取得 */
const last = new Date(document.lastModified);
var year = last.getFullYear();
var month = last.getMonth() + 1;
var date = last.getDate();

var hour = last.getHours(); // 時
var min = last.getMinutes(); // 分
var sec = last.getSeconds(); // 秒

// 数値が1桁の場合、頭に0を付けて2桁で表示する指定

if(month < 10) { var month = '0' + month; }
if(day < 10) { var day = '0' + day; }
if(hour < 10) { var hour = '0' + hour; }
if(min < 10) { var min = '0' + min; }
if(sec < 10) { var sec = '0' + sec; }


/* 日付を書き換える */
var target = document.getElementById('modify');
target.textContent = year + '.' + month + '.' + date + ' ' + hour + ':' + min + ':' + sec;

</script>

(GMT -09:00)

<!-- 更新日時 -->
`)
