window.addEventListener("DOMContentLoaded", () => {
    const container = document.body;
    container.innerHTML = `<main><div class="cart cart-submit">
            <div class="cart_logo">
                <img src="./images/icon-star.svg" alt="star" />
            </div>
            <div class="cart_content">
                <h1>How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <div class="cart_form">
                <div class="cart_form--numbers">
                    <button class="number-btn">1</button>
                    <button class="number-btn">2</button>
                    <button class="number-btn">3</button>
                    <button class="number-btn">4</button>
                    <button class="number-btn">5</button>
                </div>
                <button class="submit-btn">Submit</button>
            </div>
        </div>
        <div class="cart cart-complete">
            
        </div> </main>`;
    const numberBtns = document.querySelectorAll(".number-btn");
    const submitBtn = document.querySelector(".submit-btn");
    const cartSubmit = document.querySelector(".cart-submit");
    const cartComplete = document.querySelector(".cart-complete");
    let selectedIndex = null;
    numberBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            selectedIndex = index + 1;
            const activeBtn = document.querySelector(".number-btn.active");
            if (activeBtn) {
                activeBtn.classList.remove("active");
            }
            btn.classList.add("active");
        });
    });
    submitBtn.addEventListener("click", () => {
        cartSubmit.style.display = "none";
        cartComplete.classList.add("active");
        cartComplete.innerHTML = `<div class="cart-complete_logo">
                <img src="./images/illustration-thank-you.svg" alt="logo" />
            </div>

             <h3>You selected ${selectedIndex}  out of 5</h3>

            <div class="cart-complete_content">
                <h1>Thank you</h1>
                <p>
                    We appreciate you taking the time to give a rating. If you
                    ever need more support, don’t hesitate to get in touch!
                </p>
            </div>`;
    });
});
