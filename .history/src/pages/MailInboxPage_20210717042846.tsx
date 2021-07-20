import React from "react";
import { match } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { EmailCRM} from "../types";
import PageBase from "../components/PageBase";
import SkeletonForm from "../components/SkeletonForm";
import { getAction } from "../actions/emailcrm";
import { thunkApiCall } from "../services/thunks";
import { formPageStyles } from "../styles";
import { ApiAction, GET_EMAILCRM } from "../store/types";

const styles = formPageStyles;
interface EmailCRMProps {
  match?: match;
  emailCrm: EmailCRM;
  getEmailCRM: typeof thunkApiCall;
  errorMessage?: string;
  isFetching: boolean;
  updated: boolean;
}
interface EmailCRMState {
  emailCrm: EmailCRM;
  snackbarOpen: boolean;
  autoHideDuration: number;
}

// class CustomerFormPage extends React.Component {
class MailInboxPage extends React.Component<
  EmailCRMProps,
  EmailCRMState
> {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.onSnackBarClose = this.onSnackBarClose.bind(this);
  }

  state = {
    emailCrm: {} as EmailCRM,
    snackbarOpen: false,
    autoHideDuration: 2000,
  };

  componentDidMount() {
    // @ts-ignore
    const emailCrmId = 1;
    let action: ApiAction;
    if (emailCrmId) {
      action = getAction(GET_EMAILCRM, emailCrmId); //  Object.assign({}, this.getAction);
      this.props.getEmailCRM(action);
    }
  }

  componentDidUpdate(prevProps) {
    // reset page if items array has changed
    if (this.props.emailCrm !== prevProps.emailCrm) {
      this.setState({ emailCrm: this.props.emailCrm });
    }
    if (
      this.props.updated !== prevProps.updated &&
      this.props.updated === true
    ) {
      this.setState({ snackbarOpen: true });
    }
  }

  onSnackBarClose() {
    this.setState({
      snackbarOpen: false,
    });
  }

  render() {
    const { isFetching, emailCrm } = this.props;
    return (
      <PageBase title="Email Inbox" navigation="Application / Email Inbox ">
        {isFetching ? (
          <div>
            <SkeletonForm />
          </div>
        ) : (
          <Grid container style={styles.container} spacing={3}>
            <Grid item style={styles.cell} xs={12} md={4}>
              <TextField
                placeholder="Date"
                label="Date"
                name="Date"
                fullWidth={true}
                value={emailCrm.date}
                // onChange={}
              />
              <Grid>{emailCrm.date}</Grid>
            </Grid>
            <Grid item style={styles.cell} xs={12} md={4}>
              <TextField
                placeholder="From Email"
                label="From Email"
                name="From Email"
                fullWidth={true}
                value={emailCrm.from}
                // onChange={}
              />
            </Grid>
            <Grid item style={styles.cell} xs={12} md={4}>
              <TextField
                placeholder="Subject"
                label="Subject"
                name="Subject"
                fullWidth={true}
                value={emailCrm.subject}
                // onChange={}
              />
            </Grid>

            <Grid item style={styles.cell} xs={12} md={4}>
              <TextField
                placeholder="To"
                label="To"
                name="To"
                fullWidth={true}
                value={emailCrm.to}
                // onChange={}
              />
            </Grid>
          </Grid>
        )}
      </PageBase>
    );
  }
}

function mapStateToProps(state) {
  const {
    emailCrm,
    isFetching,
    updated,
  } = state.emailCrm;

  return {
    emailCrm,
    isFetching,
    updated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmailCRM: (action) => dispatch(thunkApiCall(action)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MailInboxPage);
