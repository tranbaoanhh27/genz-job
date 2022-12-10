$(document).ready(function() {
    var table = $('#dataTable').DataTable();

    $('#dataTable tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });
});