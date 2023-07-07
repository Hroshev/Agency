const containerItem = document.querySelector(".catalog__inner");

if(containerItem){
  createItem()
}

function createItem() {
  const listItem = [
    {
      imgUrl: "img/catalog/rice.png",
      title: "Cat Energy PRO",
      mass: "500 г",
      taste: "Рис",
      price: "500 P.", 
    },
    {
      imgUrl: "img/catalog/buckwheatBig.png",
      title: "Cat Energy PRO",
      mass: "1000 г",
      taste: "Гречка",
      price: "700 P.", 
    },
    
  ];

  const makeElement = function (tagName, className, text) {
    const element = document.createElement(tagName);
  
    text ? (element.textContent = text) : "";
    className ? element.classList.add(className) : "";
  
    return element;
  };
  
  const createItem = function (product) {

    const catalogItem = makeElement("div", "catalog__item");

    const wrapper = makeElement("div", "catalog__wrapper");
    catalogItem.appendChild(wrapper);

    const innerImage = makeElement("div", "catalog__item-image");
    wrapper.appendChild(innerImage);

    const image = makeElement("img", "catalog__item-picture");
    image.src = product.imgUrl;
    innerImage.appendChild(image);

    const description = makeElement("div", "catalog__item-description");
    wrapper.appendChild(description);

    const title = makeElement("h2", "catalog__description-title", `${product.title} ${product.mass}`);
    description.appendChild(title);

    const descriptionWrapperOne = makeElement("div", "catalog__description-wrapper");
    description.appendChild(descriptionWrapperOne);

    const massa = makeElement("p", "catalog__description-text", "Масса");
    descriptionWrapperOne.appendChild(massa);

    const massaContent = makeElement("p", "catalog__description-text", product.mass);
    if(parseInt(product.mass) > 500) {
        image.style['max-width'] = "172px"
    }else {
        innerImage.style['padding-top'] = "28px"
    }
    descriptionWrapperOne.appendChild(massaContent);

    const descriptionWrapperTwo = makeElement("div", "catalog__description-wrapper");
    description.appendChild(descriptionWrapperTwo);

    const taste = makeElement("p", "catalog__description-text", "Вкус");
    descriptionWrapperTwo.appendChild(taste);

    const tasteContent = makeElement("p", "catalog__description-text", product.taste);
    descriptionWrapperTwo.appendChild(tasteContent);

    const descriptionWrapperThree = makeElement("div", "catalog__description-wrapper");
    description.appendChild(descriptionWrapperThree);

    const price = makeElement("p", "catalog__description-text", "Цена");
    descriptionWrapperThree.appendChild(price);

    const priceContent = makeElement("p", "catalog__description-text", product.price);
    descriptionWrapperThree.appendChild(priceContent);

    const button = makeElement("a", "catalog__button", "заказать");
    button.href = "#";
    catalogItem.appendChild(button);
  
    return catalogItem;
  };
  
  //Product output 
  for (let i = 0; i < listItem.length; i++) {
    const cardItem = createItem(listItem[i]);
    containerItem.insertBefore(cardItem, containerItem.firstElementChild);
  }
}