// grab slack webhooks
const { webhook_uci_all } = process.env;
const { webhook_uci_m_w } = process.env;
const { webhook_uci_t_th } = process.env;
const { webhook_uci_test } = process.env;


module.exports = function (value ) {

    switch (value) {
        case 1:
            return webhook_uci_all;
            break;

        case 2:
            return webhook_uci_m_w;
            break;

        case 3:
            return webhook_uci_t_th;
            break;

        case 4:
            return webhook_uci_test;
            break;

        default:
        return null;

    }

}