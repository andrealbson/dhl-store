import * as Yup from 'yup';

export default Yup.object().shape({
    email: Yup.string().email().required('O campo email é obrigatório'),
    nome: Yup.string().min(6).required('O campo nome é obrigatório'),
    senha: Yup.string().required('O campo senha é obrigatório'),
});