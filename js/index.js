function valName() {
  const name = document.getElementById("name").value;
  const regex = /^[a-zA-ZА-Яа-я\s]{2,15}$/;

  if (regex.test(name)) {
    document.getElementById("name-val").innerHTML = "";
    return true;
  } else {
    document.getElementById("name-val").style.display = "block";
    document.getElementById("name-val").innerHTML =
      "Введите от 2 до 15 символов. Только буквы!";
    return false;
  }
}

function valLname() {
    const lastName = document.getElementById("lname").value;
    const regex = /^[a-zA-ZА-Яа-я\s]{2,15}$/;

  if (regex.test(lastName)) {
    document.getElementById("lname-val").innerHTML = "";
    return true;
  } else {
    document.getElementById("lname-val").style.display = "block";
    document.getElementById("lname-val").innerHTML =
      "Введите от 2 до 15 символов. Только буквы!";
    return false;
  }
}

function valEmail() {
    const email = document.getElementById("email").value;
    const regex = /\S+@\S+\.\S+/;
  
    if (regex.test(email)) {
        document.getElementById("email-val").innerHTML = "";
      return true;
    } else {
        document.getElementById("email-val").style.display = "block";
        document.getElementById("email-val").innerHTML =
        "Введите в данном формате: email@email.email!";
      return false;
    }
  }

function valTel() {
    const tel = document.getElementById("tel").value;
    const regex = /^(\8)[0-9]{10}$/;

  if (regex.test(tel)) {
    document.getElementById("tel-val").innerHTML = "";
    return true;
  } else {
    document.getElementById("tel-val").style.display = "block";
    document.getElementById("tel-val").innerHTML =
      "Введите номер в формате: 81234567890";
    return false;
  }
}

function valClothes() {
    const clothesValue = document.getElementById("clothes").value;

    if (clothesValue == 1 || clothesValue == 2 || clothesValue == 3 || clothesValue == 4) {
        document.getElementById("clothes-val").innerHTML = "";
        return true;
    } else {
        document.getElementById("clothes-val").style.display = "block";
        document.getElementById("clothes-val").innerHTML =
        "Может что--то выберем? :)";
        return false;
    }
}

function valSize() {
    const sizeValue = document.getElementById("size").value;

    if (sizeValue == 1 || sizeValue == 2 || sizeValue == 3) {
        document.getElementById("size-val").innerHTML = "";
        return true;
    } else {
        document.getElementById("size-val").style.display = "block";
        document.getElementById("size-val").innerHTML =
        "Какой размерчик?";
        return false;
    }
}

function valQuantity() {
    const quantityValue = document.getElementById("quantity").value;

    if (quantityValue != "") {
        document.getElementById("quantity-val").innerHTML = "";
        return true;
    } else {
        document.getElementById("quantity-val").style.display = "block";
        document.getElementById("quantity-val").innerHTML =
        "Сколько сколько?";
        return false;
    }
}

function valDest() {
    const destValue = document.getElementById("dest").value;
    const regex = /^[a-zA-ZА-Яа-я0-9\s]{10,80}$/;

    if (regex.test(destValue)) {
        document.getElementById("dest-val").innerHTML = "";
        return true;
    } else {
        document.getElementById("dest-val").style.display = "block";
        document.getElementById("dest-val").innerHTML =
        "Введите от 10 до 80 символов. Только цифры и буквы!";
        return false;
    }
}

function valPayment() {
    const paymentValue = document.getElementById("payment").value;

    if (paymentValue == 1 || paymentValue == 2 || paymentValue == 3) {
        document.getElementById("payment-val").innerHTML = "";
        return true;
    } else {
        document.getElementById("payment-val").style.display = "block";
        document.getElementById("payment-val").innerHTML =
        "Необходимо выбрать способ оплаты";
        return false;
    }
}

function displaySummary() {
  const name = document.getElementById("name").value;
  const lname = document.getElementById("lname").value;
  const tel = document.getElementById("tel").value;
  const email = document.getElementById("email").value;
  let clothes = document.getElementById("clothes").value;
  let size = document.getElementById("size").value;
  const quantity = document.getElementById("quantity").value;
  const address = document.getElementById("dest").value;
  const payment = document.getElementById("payment").value;

  if (clothes == 1) {
      clothes = "Футболка";
  } else if (clothes == 2) {
      clothes = "Кофта"
  } else if (clothes == 3) {
      clothes = "Джинсы"
  } else if (clothes == 4) {
      clothes = "Кроссовки"
  }

  if (size == 1) {
    size = "S";
    } else if (size == 2) {
        clothes = "M"
    } else if (clothes == 3) {
        clothes = "L"
    }

  if (
    name != "" &&
    lname != "" &&
    valTel() === true &&
    email != "" &&
    clothes != "Я хочу" &&
    size != "Мой размер" &&
    quantity != "",
    address != "",
    payment != "Выбираю"
  ) {
    document.getElementById("summary").classList.remove("error-val-summary");
    document.getElementById("summary").innerHTML = "";
    document.getElementById("summary").style.color = "black";
    document.getElementById("productform_order").style.justifyContent = "space-between";
    document.getElementById("myform_summary").style.display = "block";
    document.getElementById("summary").innerHTML += "<strong>Заказ принят в обратку!</strong></br></br>";
    document.getElementById("summary").innerHTML += "<strong>Ваши данные:</strong></br>";
    document.getElementById("summary").innerHTML += "<strong>Имя:</strong> " + name + "</br>";
    document.getElementById("summary").innerHTML += "<strong>Фамилия:</strong> " + lname + "</br>";
    document.getElementById("summary").innerHTML += "<strong>Номер телефона:</strong> " + tel + "</br>";
    document.getElementById("summary").innerHTML += "<strong>Почта:</strong> " + email + "</br>";
    document.getElementById("summary").innerHTML += "<strong>Одежда:</strong> " + clothes + "</br>";
    document.getElementById("summary").innerHTML += "<strong>Размер:</strong> " + size + "</br>";
    document.getElementById("summary").innerHTML += "<strong>Количество:</strong> " + quantity + "</br>";
    document.getElementById("summary").innerHTML += "<strong>Адрес доставки:</strong> " + address + "</br>";
    document.getElementById("summary").innerHTML += "<strong>Способ оплаты:</strong> " + payment + "</br>";
  } else {
    document.getElementById("productform_order").style.justifyContent = "space-between";
    document.getElementById("myform_summary").style.display = "block";
    document.getElementById("summary").classList.add("error-val-summary");
    document.getElementById("summary").innerHTML = "Необходимо заполнить все поля!";
  }
}

function changePromoColor() {
    const colorIndex = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    const promo = document.getElementById("promo");
    
    function setColor1() {
        promo.style.background = "rgb(255,153,0)";
        promo.style.background = "linear-gradient(90deg, rgba(255,153,0,1) 0%, rgba(255,103,91,1) 38%, rgba(214,87,139,1) 96%)";
    }

    function setColor2() {
        promo.style.background = "rgb(63,94,251)";
        promo.style.background = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)";
    }

    function setColor3() {
        promo.style.background = "rgb(131,58,180)";
        promo.style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
    }

    function setColor4() {
        promo.style.background = "rgb(238,174,202)";
        promo.style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
    }

    function setColor5() {
        promo.style.background = "rgb(34,193,195)";
        promo.style.background = "linear-gradient(99deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)";
    }
    
    switch (colorIndex) {
        case 1: 
            setColor1();
            break;
        case 2: 
            setColor2();
            break;
        case 3: 
            setColor3();
            break;
        case 4: 
            setColor4();
            break;
        case 5: 
            setColor5();
            break;
    }
}

function colorPromoText1() {
    const promoText1 = document.getElementById("promo-text1");
    
    promoText1.classList.add("color-text");
}

function colorPromoText2() {
    const promoText2 = document.getElementById("promo-text2");

    promoText2.classList.add("color-text");
}

function colorPromoText3() {
    const promoText3 = document.getElementById("promo-text3");

    promoText3.classList.add("color-text");
}