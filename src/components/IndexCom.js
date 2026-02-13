import imageFile from "../styles/images/test.jpg"
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent"
import { ProductContext, ProductImg, ProductList, ProductListBox, ProductName, ProductPrice, ProductTitle } from "./common/StyleProduct"


const products = [];
for(let i=1; i<=12; i++){
    products.push({ id: i, name: "멋진 사진", context: "화려하고 멋있고 아름답고...", price: "5000원", url: imageFile })
}

const IndexCom = () => {
    return (<>
        <StyleContentBlock>
            <StyleContentWrap>
                <ProductTitle>상품 제목</ProductTitle>
                <ProductList>
                    {products.map(pro => (<ProductListBox key={pro.id}>
                        <ProductImg src={pro.url} alt="" />
                        <ProductName>{pro.name}</ProductName>
                        <ProductContext>{pro.context}</ProductContext>
                        <ProductPrice>{pro.price}</ProductPrice>
                    </ProductListBox>))}
                </ProductList>
            </StyleContentWrap>
        </StyleContentBlock>
    </>
    )
}
export default IndexCom
