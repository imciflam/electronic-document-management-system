import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTreaty } from "../../actions/treaties";
import { Upload, Icon, message } from "antd";

const Dragger = Upload.Dragger;
var fileDocument;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const status = info.file.status;
    if (status !== "uploading") {
      //console.log(info.file, info.fileList);
      console.log(info.fileList[0].name);
      fileDocument = info.fileList[0].name;
    }
    if (status === "done") {
      message.success(`${info.file.name} успешно загружен.`);
    } else if (status === "error") {
      message.error(`${info.file.name} не был загружен.`);
    }
  }
};

export class FormForTreaties extends Component {
  state = {
    contractCode: "",
    contractStageCode: "",
    counteragentCode: "",
    sumMoney: "",
    sumNDS: "",
    dateOfSigning: ""
  };

  static propTypes = {
    addTreaty: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      contractCode: "служебная записка",
      contractStageCode: "черновик"
    };
    this.fileInput = React.createRef();
  }

  //any name will match, same with value
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      contractCode,
      contractStageCode,
      counteragentCode,
      sumMoney,
      sumNDS,
      dateOfSigning,
      contractType,
      placeOfStorage,
      requisite,
      periodOfValidity
    } = this.state;
    const treaty = {
      contractCode,
      contractStageCode,
      counteragentCode,
      sumMoney,
      sumNDS,
      dateOfSigning,
      contractType,
      placeOfStorage,
      requisite,
      periodOfValidity
    };
    this.props.addTreaty(treaty);
    console.log(treaty);
  };

  render() {
    const {
      contractCode,
      contractStageCode,
      counteragentCode,
      sumMoney,
      sumNDS,
      dateOfSigning,
      contractType,
      placeOfStorage,
      requisite,
      periodOfValidity
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4 w-75 mx-auto">
        <h2>Добавить контракт</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="contractCode">Тип контракта</label>
            <select
              className="form-control"
              id="contractCode"
              name="contractCode"
              value={contractCode}
              onChange={this.onChange}
            >
              <option value="служебная записка">контракт</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="contractStageCode">Этап</label>
            <select
              className="form-control"
              id="contractStageCode"
              name="contractStageCode"
              value={contractStageCode}
              onChange={this.onChange}
            >
              <option value="черновик">черновик</option>
              <option value="на согласовании">на согласовании</option>
              <option value="на исполнении">на исполнении</option>
              <option value="на рассмотрении">на рассмотрении</option>
              <option value="исполнено">исполнено</option>
              <option value="согласовано">согласовано</option>
              <option value="завершено">завершено</option>
              <option value="отклонено">отклонено</option>
            </select>
          </div>
          <div className="form-group">
            <label>Код контрагента</label>
            <input
              className="form-control"
              type="text"
              name="counteragentCode"
              onChange={this.onChange}
              value={counteragentCode}
            />
          </div>
          <div className="form-group">
            <label>Сумма</label>
            <input
              className="form-control"
              type="text"
              name="sumMoney"
              onChange={this.onChange}
              value={sumMoney}
            />
          </div>
          <div className="form-group">
            <label>Сумма НДС</label>
            <input
              className="form-control"
              type="text"
              name="sumNDS"
              onChange={this.onChange}
              value={sumNDS}
            />
          </div>
          <div className="form-group">
            <label>Дата подписания</label>
            <input
              className="form-control"
              type="text"
              name="dateOfSigning"
              onChange={this.onChange}
              value={dateOfSigning}
            />
          </div>

          <div className="form-group">
            <label>Вид договора</label>
            <input
              className="form-control"
              type="text"
              name="contractType"
              onChange={this.onChange}
              value={contractType}
            />
          </div>

          <div className="form-group">
            <label>Место хранения</label>
            <input
              className="form-control"
              type="text"
              name="placeOfStorage"
              onChange={this.onChange}
              value={placeOfStorage}
            />
          </div>

          <div className="form-group">
            <label>Реквизиты</label>
            <input
              className="form-control"
              type="text"
              name="requisite"
              onChange={this.onChange}
              value={requisite}
            />
          </div>

          <div className="form-group">
            <label>Срок действия</label>
            <input
              className="form-control"
              type="text"
              name="periodOfValidity"
              onChange={this.onChange}
              value={periodOfValidity}
            />
          </div>

          <br />
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Отправить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTreaty }
)(FormForTreaties);
