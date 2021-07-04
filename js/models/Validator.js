function Validator() {
    this.kiemTraRong = function(value, spanId, mess) {
        if(!value) {
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = mess;
            return false;
        } else{
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = '';
            return true;
        };
    };

    this.kiemTraDoDaiKyTu = function(value, spanId, mess, min, max) {
        if(value.length >= min && value.length <= max) {
            getEle(spanId).style.display = 'none';
            getEle(spanId).innerHTML = '';
            return true;
        } else{
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = mess;
            return false;
        };
    };

    this.kiemTraChuoi = function(value, spanId, mess) {
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");

        if(pattern.test(value)) {
            getEle(spanId).style.display = 'none';
            getEle(spanId).innerHTML = '';
            return true;
        } else{
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = mess;
            return false;
        };
    };

    this.kiemTraEmail = function(value, spanId, mess) {
        var testEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(testEmail.test(value)) {
            getEle(spanId).style.display = 'none';
            getEle(spanId).innerHTML = '';
            return true;
        } else{
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = mess;
            return false;
        };
    };

    this.kiemTraPassWord = function(value, spanId, mess) {
        var testPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,10})");
        if(testPass.test(value)) {
            getEle(spanId).style.display = 'none';
            getEle(spanId).innerHTML = '';
            return true;
        } else{
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = mess;
            return false;
        };
    };

    this.kiemTraDate = function(value, spanId, mess) {
        var testDate = new RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
        if(testDate.test(value)) {
            getEle(spanId).style.display = 'none';
            getEle(spanId).innerHTML = '';
            return true;
        } else{
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = mess;
            return false;
        };
    };

    this.kiemTraLuong = function(value, spanId, mess, min, max) {
        var testLuong = new RegExp("^-?[0-9][0-9,\.]+$");
        if(testLuong.test(value) && value >= min && value <= max) {
            getEle(spanId).style.display = 'none';
            getEle(spanId).innerHTML = '';
            return true;
        } else{
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = mess;
            return false;
        };
    };

    this.kiemTraChucVu = function(value, spanId, mess) {
        if(value === 'Sếp' || value === 'Trưởng phòng' || value === 'Nhân viên') {
            getEle(spanId).style.display = 'none';
            getEle(spanId).innerHTML = '';
            return true;
        } else{
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = mess;
            return false;
        };
    };

    this.kiemTraGioLam = function(value, spanId, mess, min, max) {
        var testGioLam = new RegExp("^-?[0-9][0-9,\.]+$");
        if(testGioLam.test(value) && value >= min && value <= max) {
            getEle(spanId).style.display = 'none';
            getEle(spanId).innerHTML = '';
            return true;
        } else{
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = mess;
            return false;
        };
    };

} 