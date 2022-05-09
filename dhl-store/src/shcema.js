import * as Yup from 'yup';

export default Yup.object().shape({
    email: Yup.string().email().required('O campo email é obrigatório'),
    senha: Yup.string().required('O campo senha é obrigatório'),
});