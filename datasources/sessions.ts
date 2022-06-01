const sessions = require("../data/sessions.json")
const { DataSource } = require("apollo-datasource")
const _ = require("lodash")

export default class SessionAPI extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {}

  getSessions(args) {
    const getSessions = _.filter(sessions, args)
    return getSessions
  }
  getSessionsById(id) {
    const getSessions = _.filter(sessions, { id: parseInt(id) })
    return getSessions[0]
  }
}
