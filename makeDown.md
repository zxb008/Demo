# 1.标题的写法:
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
这是一级标题
======
这是二级标题(=和-无数量限制，大于一即可)
--------
<h1>一级标题</h1>
<h2>二级标题</h2>
...

# 2.列表的写法:
### 无序列表(有*,+,-三种写法，一般用*)
* 1
* 2
+ 1
+ 2
- 1
- 2

### 有序列表(注意，数字后面的点只能是英文的点，特别注意，有序列表的序号是根据第一行列表的数字顺序来)
1. 1
2. 2
3. 3

### 有序列表
7. 1
2. 2
3. 3

# 3.区块应用:
> 你想对某个部分做的内容做一些说明或者引用某某的话等，可以用这个语句
* 不以结婚为目的的谈恋爱就是耍流氓
  > 这是XXX说的
> 一级引用
>> 二级引用
>>> 三级引用
>>>> 四级引用
>>>>> 五级引用
>>>>>> 六级引用
>>>>>>> 七级引用

# 4.华丽的分割线:
> 分割线可以由* - _（星号，减号，底线）这3个符号的至少3个符号表示，注意至少要3个，且不需要连续，有空格也可以
----------
#### 我爱你
___________
##### 我也爱你
*************

# 5.链接:
> 支持2种链接方式：行内式和参数式，不管是哪一种，链接文字都是用 [方括号] 来标记。
### 行内式
[百度首页](http://www.baidu.com)

[name]: http://www.baidu.com/name "百度首页"

[瞎写的]: /name "瞎写的"
这里是[name]瞎写的[瞎写的]
# 6.图片:
> 图片也有2种方式：行内式和参数式

![我是图片](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555501501172&di=2fefc5f94e72152a545f577b3a7ebd2b&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn2%2Fg14%2FM07%2F0E%2F1D%2FrBEhV1IpoSIIAAAAAAYgniGIiT0AAC6ZALAB_0ABiC2574.jpg)

[我是图片]: https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555501501172&di=2fefc5f94e72152a545f577b3a7ebd2b&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn2%2Fg14%2FM07%2F0E%2F1D%2FrBEhV1IpoSIIAAAAAAYgniGIiT0AAC6ZALAB_0ABiC2574.jpg
参数式图片：![我是图片]

# 7.代码框
### 第一种 单行用``
`<p>我是代码</p>`
### 第二种 多行用```
``` 可以写注释(多行用三个反引号，如果要写注释，可以在反引号后面写)
<p>我是代码<p>
<p>我是代码<p>
<p>我是代码<p>
```

# 8.表格
> 3种不同写法看，表格的格式不一定要对的非常起，但是为了好看，对齐肯定是最好的，第一种的分割线后面的冒号表示对齐方式，写在左边表示左对齐，右边为右对齐，两边都写表示居中，还是有点意思的，不过现实出来的结果是，表格外面并没有线框包起来，不知道别人的怎么弄的

| name | age | sex |
|:-----:|:-----|-----:|
| tony | 20  | 男  |
| tim  | 20  | 女  |

表头1 | 表头2 
--------- | --------
content cell | content cell
content cell | content cell

姓名 | 年龄 | 班级
-|-|-|
tom | 12 | 1
jac | 15 | 2
tim | 14 | 3
# 9.强调
> 一个星号或者是一个下划线包起来，会转换为<em>倾斜</em>，如果是2个，会转换为<strong>加粗</strong>

*倾斜*
_倾斜_
**加粗**
__加粗__
# 10.转义
\`
> 基本上跟js转义是一样的
# 11.删除线
~~删除我~~
# 12.更多关于markdown
[链接1](https://www.cnblogs.com/liugang-vip/p/6337580.html)
[链接2](https://www.appinn.com/markdown/)
[链接3](https://sspai.com/post/25137)
