let boxes=document.querySelectorAll(".boxes");
let res=document.querySelector("#result");
let reset=document.querySelector("#Reset");

let turnx=true;

const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let cnt=0;


boxes.forEach((box)=>
{
    reset.addEventListener("click",()=>
    {
        for(let i=0;i<9;i++)
        {
            if(box.disabled===true)
            {
                box.disabled=false;
            }
            box.innerText="";
            res.innerText="Result";
        }
        cnt=0;
    })
})


boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turnx===true)
        {
            box.innerText="X";
            box.disabled=true;
            turnx=false;
            cnt++;
        }
        else
        {
            box.innerText="O";
            box.disabled=true;
            turnx=true;
            cnt++;
        }
        winner();
    })
})
const winner=()=>
{
    for(let ind of wins)
    {
        let flag=0;
        let val1=boxes[ind[0]].innerText;
        let val2=boxes[ind[1]].innerText;
        let val3=boxes[ind[2]].innerText;
        //console.log(boxes[ind[0]]);
        if(val1!="" && val2!="" && val3!="" && val1===val2 && val2===val3)
        {
            showWinner(val1);
            flag=1;
            disable();
            break;
        }
        if(flag===0 && cnt===9)
        {
            res.innerText="Draw";
        }

    }
}

const showWinner=(val1)=>
{
    res.innerText="Congratulations Player "+val1+" Won";
}

const disable=()=>
{
    for(let i=0;i<9;i++)
    {
        boxes[i].disabled=true;
    }
}
