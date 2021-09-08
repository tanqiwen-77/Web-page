
/*
*项目名: 个人简历
*创建者: Edit
*创建时间:2020.2.15 20:40:41
*联系方式:15622749328(微信同号)
*描述: 酷炫个人简历
*/

let textArr = [
    {
        name: 'h1',
        class: 'text-title1',
        text: '写给石大的一封情书'
    },
   {
        name: 'h3',
        class: 'text-title',
        text: '亲爱的石大：'
    },
    {
        name: 'h3',
        class: 'text-title',
        text: '您好！'
    },
    {
        name: 'h3',
        class: 'text-title',
        text: '我想，我正怀着一份娇羞的心情，写一封情书给你。'
    }, 
    {
        name: 'h3',
        class: 'text-title',
        text: '携一纸信笺，书一份真情，但愿时光不老，岁月静好。'
    },
    {
        name:'div',
        class:'main',
        text:''
    }
   
]
let style = `

*{
    transition: all .8s;
}
#resume{
    box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
}
#codeEdit{
    color:#fff;
    background:#666666;
}
    pre#codeEdit{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #6A9955;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    let textArr = [
        {
            name: 'h1',
            class: 'text-title1',
            text: '写给石大的一封情书'
        },
       {
            name: 'h3',
            class: 'text-title',
            text: '亲爱的石大：'
        },
        {
            name: 'h3',
            class: 'text-title',
            text: '您好！'
        },
        {
            name: 'h3',
            class: 'text-title',
            text: '我想，我正怀着一份娇羞的心情，写一封情书给你。'
        }, 
        {
            name: 'h3',
            class: 'text-title',
            text: '携一纸信笺，书一份真情，但愿时光不老，岁月静好。'
        },
        {
            name:'div',
            class:'main',
            text:''
        }
       
    ]
    let message=[{
        text:'回望过去',
        url:'static/images/0.jpg'
    },
    {
        text:'四年相伴',
        url:"static/images/1.jpg"
    },
    {
        text:'犹记当时',
        url:"static/images/2.jpg"
    },
    {
        text:'初次相遇',
        url:"static/images/3.jpg"
    },
    {
        text:'满怀憧憬与不安',
        url:"static/images/4.jpg"
    },
    {
        text:'来到这里',
        url:"static/images/5.jpg"
    },
    {
        text:'阳光正好',
        url:'static/images/6.jpg'
    },
    {
        text:'你我相拥',
        url:'static/images/7.jpg'
    },
    {
        text:'心生向往',
        url:'static/images/8.jpg'
    },
    {
        text:'忆初时迷茫',
        url:'static/images/9.jpg'
    },
    {
        text:'记青涩年华',
        url:'static/images/10.jpg'
    },
    {
        text:'纵使心有胆怯',
        url:'static/images/11.jpg'
    },
    {
        text:'却有你的鼓励',
        url:'static/images/12.jpg'
    }
    ]
`
let balloon = `
    <div class="balloon-wrap" id="balloon-wrap1">
        <img src="static/images/摄图网_401270991_粉色情书水彩（非企业商用）.png" id="bg-balloon-small">
        <img src="static/images/摄图网_401045362_情不知所起一往而深手写字体（非企业商用）.png" id="bg-balloon-large">
        <img src="static/images/摄图网_401293582_520情人节纸飞机情书（非企业商用）.png" id="bg-balloon-pre1">
        <img src="static/images/信封.png" id="bg-balloon-pre2">
        <img src="static/images/边框.png" id="bg-balloon-pre3">
        <img src="static/images/摄图网_401496358_爱心（非企业商用）.png" id="bg-balloon-pre4">
        <img src="static/images/摄图网_401496358_爱心（非企业商用）.png" id="bg-balloon-pre4">

    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
    let line = `
    <div class="line-wrap">
        
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`



