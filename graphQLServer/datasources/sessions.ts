import { sessions } from "../data"
import { DataSource } from "apollo-datasource"

type Args = {
  id?: number
  title?: string
  description?: string
  startsAt?: string
  endsAt?: string
  speakers?: { id: string; name: string }[]
  room?: string
  day?: string
  format?: string
  track?: string
  level?: string
}
export default class SessionAPI extends DataSource {
  constructor() {
    super()
  }

  initialize(_config: any) {}

  getSessions(args: Args) {
    const getSessions = sessions.filter((session) => args)
    return getSessions
  }
  getSessionsById(id: string) {
    const parsedId = parseInt(id)
    const getSessions = sessions.filter((session) => parsedId === session.id)
    return getSessions[0]
  }
}
