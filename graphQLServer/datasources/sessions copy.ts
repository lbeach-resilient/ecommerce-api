import { sessions } from '../data'
import { DataSource } from 'apollo-datasource'

export type Session = {
    id: number
    title: string
    description: string
    startsAt: string
    room: string
    day: string
    endsAt: string
    format: string
    level: string
    track: string
}

export type SessionAPIDataSource = DataSource & {
    getSessions: () => Session[]
    getSessionsBy: (id: string) => Session
}

export default class SessionAPI extends DataSource implements SessionAPIDataSource {
    constructor() {
        super()
    }

    getSessions() {
        return sessions
    }
    getSessionsBy(id: string) {
        const parsedId = parseInt(id)
        const getSessions = sessions.filter((session) => parsedId === session.id)
        return getSessions[0]
    }
}
