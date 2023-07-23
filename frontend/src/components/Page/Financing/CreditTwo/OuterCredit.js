import LinearStepper from './LinearStepper'
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Layout from '../../../layout/layout/layout'
function OuterCredit() {
  return (
  <>
  <Layout>
      <CssBaseline />
       {/* <Container component={Box} p={4}> */}
        <Paper elevation={3} p={3}>
          <LinearStepper />
        </Paper>
      {/* </Container> */}
  </Layout>
      </>
  );
}

export default OuterCredit;
