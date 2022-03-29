describe("Calculator", function () {
  // Set up HTML for tests
  beforeEach(function () {
    var fixture = `
    <!-- calculator -->
    <div class="calculator" id='fixture'>
  
      <!-- display -->
      <input type="text" class="display" disabled>
      <!-- keys -->
      <div class="keys">
        <!-- 4 rows of keys -->
        <div class="row">
          <button id='seven' value="7">7</button>
          <button id='eight' value="8">8</button>
          <button id='nine' value="9">9</button>
          <button id='add' value="+" class="operator">+</button>
        </div>
        <div class="row">
          <button id='four' value="4">4</button>
          <button id='five' value="5">5</button>
          <button id='six' value="6">6</button>
          <button id='subtract' value="-" class="operator">-</button>
        </div>
        <div class="row">
          <button id='one' value="1">1</button>
          <button id='two' value="2">2</button>
          <button id='three' value="3">3</button>
          <button id='multiplication' value="*" class="operator">*</button>
        </div>
        <div class="row">
          <button id='clear' value="C" class="operator">C</button>
          <button id='zero' value="0">0</button>
          <button id='division' value="/" class="operator">/</button>
          <button id='equals' value="=" class="opera~~tor">=</button>
        </div>
      </div>
    
    </div>
    <!-- calculator body ends -->
    `;

    document.body.insertAdjacentHTML("afterbegin", fixture);
  });

  afterEach(function () {
    document.body.removeChild(document.getElementById("fixture"));
  });

  beforeEach(function () {
    startUpCalculator();
  });

  it("Should return 9 for 5 + 4", function () {
    // Click 5 and 4
    document.getElementById("five").click();
    document.getElementById("add").click();
    document.getElementById("four").click();

    // Add numbers
    document.getElementById("equals").click();
    const display = document.querySelector(".display");

    expect(document.querySelector(".display").value).toBe("9");
  });

  it("Should return 10 for 2 * 5", function () {
    // Click 2, 5 and multiplication sign
    document.getElementById("two").click();
    document.getElementById("multiplication").click();
    document.getElementById("five").click();

    // Multiply numbers
    document.getElementById("equals").click();
    const display = document.querySelector(".display");

    expect(document.querySelector(".display").value).toBe("10");
  });

  it("Should return 29 for 3 * 9 + 2", function () {
    // Click 2, 5 and multiplication sign
    document.getElementById("three").click();
    document.getElementById("multiplication").click();
    document.getElementById("nine").click();

    document.getElementById("add").click();

    document.getElementById("two").click();

    // Multiply numbers
    document.getElementById("equals").click();
    const display = document.querySelector(".display");

    expect(document.querySelector(".display").value).toBe("29");
  });
});
