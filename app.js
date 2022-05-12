window.onload = function () {
    SearchBox.init({
        inputEl: '.search'
    })
};


const SearchBox = {
    inputElement: null,
    resultBoxElement: null,
    init(props) {
        let {inputEl} = props
        this.getInput(inputEl)
        this.onClickListener()
    },
    getInput: function (inputEl) {
        this.inputElement = document.querySelector(inputEl)
        if (this.inputElement) {
            let elAttrValue = this.inputElement.getAttribute('data-search-box');
            this.resultBoxElement = document.querySelector(elAttrValue)
        }
    },
    onClickListener: function () {
        //when focus on search input box
        const a = this;
        this.inputElement.addEventListener('focus', function (event) {
            a.toggleSearchBox()
        }, true)

        //when unfocused from the search box
        document.addEventListener("click", function (e) {
            if (e.target.tagName !== "INPUT" && a.resultBoxElement.classList.contains("show-result") && !e.target.classList.contains("show-result")) {
                a.resultBoxElement.classList.remove("show-result")
            }
        })
    },

    toggleSearchBox: function () {
        this.resultBoxElement.classList.add("show-result")
    }
}