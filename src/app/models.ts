export interface Track {
  id?: string,
  name: string
}

export interface Speaker {
  id?: string,
  name: string,
  profilePic?: string,
  twitter?: string,
  about?: string,
  location?: string,
  email: string,
  phone?: string,
  sessions: string[]   // id of session
}

export interface Session {
  id?: string,
  name: string,
  timeStart: string,
  timeEnd?: string,
  location?: string,
  description?: string,
  speakerNames: string[]
  tracks: string[]
}
