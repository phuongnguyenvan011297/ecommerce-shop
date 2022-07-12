import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import productApi from "../../../api/productApi";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
import queryString from "query-string";
import { useMemo } from "react";

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: "250px",
  },

  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    paddingBottom: "2rem",
  },
}));
const TRUTH_TABLE = {
  true: true,
  false: false,
};

function ListPage(props) {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: params._sort || "salePrice:ASC",
      isFreeShip: TRUTH_TABLE[params.isFreeShip] || undefined,
      isPromotion: TRUTH_TABLE[params.isPromotion] || undefined,
    };
  }, [location.search]);

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 100,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  // const [filters, setFilter] = useState(() => ({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 9,
  // }));

  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filters),
  //   });
  // }, [history, filters]);

  console.log(queryParams);

  useEffect(() => {
    (async () => {
      try {
        const respone = await productApi.getAll(queryParams);
        const { data, pagination } = respone;

        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const handlePageChange = (e, page) => {
    // setFilter((pre) => ({
    //   ...pre,
    //   _page: page,
    // }));

    const filters = {
      ...queryParams,
      _page: page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newValue) => {
    // setFilter((pre) => ({
    //   ...pre,
    //   _sort: newValue,
    // }));

    const filters = {
      ...queryParams,
      _sort: newValue,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFilterChange = (newFilters) => {
    // setFilter((pre) => ({
    //   ...pre,
    //   ...newFilters,
    // }));

    const filters = {
      ...queryParams,
      ...newFilters,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilter
                filters={queryParams}
                onChange={handleFilterChange}
              />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={queryParams?._sort}
                onChange={handleSortChange}
              />
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}

              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  color="primary"
                  page={pagination.page}
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
