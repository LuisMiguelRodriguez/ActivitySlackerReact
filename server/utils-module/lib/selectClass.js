module.exports = function (value ) {

    switch (value) {
        
        case 1:
            return '_all';
            break;

        case 2:
            return '_m_w';
            break;

        case 3:
            return '_t_th';
            break;

        default:
        return null;

    }

}