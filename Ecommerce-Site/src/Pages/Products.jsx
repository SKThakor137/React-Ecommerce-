import FilterSection from "../Components/FilterSection";
import Sort from "../Components/Sort";
import ProductList from "../Components/ProductList";
import styled from "styled-components";

const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <FilterSection />
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 130rem;
  margin: 0 auto;
  .grid-filter-column {
    grid-template-columns: 0.25fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
    .gap {
      gap: 2rem;
    }
  }
`;

export default Products;
