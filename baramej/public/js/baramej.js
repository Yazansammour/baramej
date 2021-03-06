$(document).bind('toolbar_setup', function() {
    $('.dropdown-help').hide();
    $('.dropdown-help').attr("style", "display: none !important");
    $("div.footer-powered a.text-muted").hide();
    $('.footer-powered').hide();
    $('.navbar-home').html('<img class="erpnext-icon" src="'+frappe.urllib.get_base_url()+'/assets/baramej/images/erp-icon.jpeg" />');
    $('.splash').html('<img src="'+frappe.urllib.get_base_url()+'/assets/baramej/images/erp-icon.svg" />');
});


$(document).ready(function(){
    $('.dropdown-help').hide();
    $('.dropdown-help').attr("style", "display: none !important");
    $("div.footer-powered a.text-muted").hide();
    $('.navbar-home').html('<img class="erpnext-icon" src="'+frappe.urllib.get_base_url()+'/assets/baramej/images/erp-icon.jpeg" />');
    $('.splash').html('<img src="'+frappe.urllib.get_base_url()+'/assets/baramej/images/erp-icon.svg" />');
    $('.form-footer').hide();
    $('.footer-powered').hide();
});


// all our custom js functions and utilities will use this instance
var NERP = function(){
    this.onlyAlphabets = function(e, t) {
        try {
            if (e) {
                var charCode = e.keyCode;
            }
            else if (e) {
                var charCode = e.which;
            }
            else { return true; }
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 32)
                return true;
            else
                return false;
        }
        catch (err) {
            frappe.msgprint(err.Description);
        }
    },
    this.get_login_emp_code = function(){
        var code = "";
        frappe.call({
            method: "nerp.utils.get_employee_code",
            args: {},
            async:false,
            callback : function(res){
                if('message' in res){
                    code = res.message;
                }
            }
        });
        return code;
    },
    this.is_only_employee = function(){
        var is_employee = false;
        frappe.call({
            method: "nerp.utils.is_only_employee",
            args: {},
            async:false,
            callback : function(res){
                if('message' in res){
                    is_employee = res.message;
                }
            }
        });
        return is_employee;
    }
}

NERP.prototype.methods = function(){}
NERP.prototype.utils = function(){}

window.nerp = new NERP();