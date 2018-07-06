new Vue({
    // ,...
    components: {
        // <tinymce> tag available in parent's template
        'tinymce': VueEasyTinyMCE
    },
    data: {
        /* Your data and models here */
        myModel: '<p>initial value</p>',

        /* Config can be declare here */
        myPlugins : [],
        myToolbar1: 'undo redo | bold italic strikethrough | forecolor backcolor | template link | bullist numlist | ltr rtl | removeformat',
        myToolbar2 : '',
        myOtherOptions : {}
    }
    // ,...
});