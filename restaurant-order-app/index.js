import { menuArray } from './data.js'


let totalItems=[]
let quantity=0


document.addEventListener('click',function(e){
    if(e.target.dataset.add){
        handleAdd(e.target.dataset.add)
    }
})

function handleAdd(itemsDetails){
    menuArray.filter(function(itemObj){
        if(itemObj.id===Number(itemsDetails)){
            totalItems.push(itemObj)
        }
    })
    const orderItems=setOrder(totalItems)
    
}

function setOrder(items){
    let orderHTML=''
    const total=items.reduce((sum,item) => sum+item.price,0)
    console.log(total)
    items.map(function(item){
        if(!document.getElementById('order-items-'+item.id)){
            quantity=1
            orderHTML+=`
            <div class='order-items' id='order-items-${item.id}'>
                <p id='${item.id}'>${item.name}</p>
                <p id='quantity-${item.id}'>${quantity}</p>
                <p id='order-items-price-${item.id}'>$${item.price}</p>
            </div>`
            }
        else{
            const itemCount=items.filter(obj => obj.id===item.id).length
            let quantityVal=document.getElementById('quantity-'+item.id)
            let priceVal=document.getElementById('order-items-price-'+item.id)
            quantityVal.innerText=itemCount
            let totalPrice=itemCount*item.price
            priceVal.innerHTML=totalPrice
        }
    })
    const totalHtml=`<p class='total' id='total-value'>$${total}<p>`
    const orderList=document.getElementById('order-list')
    const totalOrder=document.getElementById('order-total')
    orderList.innerHTML+=orderHTML
    if(!document.getElementById('total-value')){
        totalOrder.innerHTML+=totalHtml
    }
    else{
        let total=document.getElementById('total-value')
        total.innerHTML=totalHtml
    }
    
    if (items.length > 0){
        orderList.classList.remove('order-display')
        totalOrder.classList.remove('total-display')
    }
    }


function setMenu(){
        let htmlItems=''
        menuArray.map(function(items){
        htmlItems+=`
            <div class='item-div item-${items.id}'>
                <div class='emoji-div'>
                    <p class='emoji'>${items.emoji}</p>
                </div>
                <div class='item-details'>
                    <h2 class='item-name'>${items.name}</h2>
                    <p class='item-ingredients'>${items.ingredients}</p>
                    <h4 class='item-price' id='${items.id}'>$${items.price}</h4>
                </div>
                <div class='add-item-div'>
                    <button class='add-item' id='add-btn item-${items.id}' data-add='${items.id}'>+</button>
                </div>
            </div>`
    })
    renderItems(htmlItems)
}


function renderItems(items){
    let itemList=document.getElementById('items-list')
    itemList.innerHTML=items
}



setMenu()