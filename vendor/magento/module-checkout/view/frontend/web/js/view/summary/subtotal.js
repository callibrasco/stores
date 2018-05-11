/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
/*global define*/
define(
    [
        'Magento_Checkout/js/view/summary/abstract-total',
        'Magento_Checkout/js/model/quote'
    ],
    function (Component, quote) {
        "use strict";
        return Component.extend({
            defaults: {
                template: 'Magento_Checkout/summary/subtotal'
            },
            getPureValue: function() {
                var totals = quote.getTotals()();
                if (totals) {
                    return totals.grand_total;
                }
                return quote.grand_total;

            },
            getValue: function () {
                if(old_price==''){
                    old_price=this.getFormattedPrice(this.getPureValue());
                }
                else{}
                //console.log('againayan:::::'+old_price);
                return old_price;                
            }

        });
    }
);