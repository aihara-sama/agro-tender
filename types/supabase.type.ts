export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      activities: {
        Row: {
          created_at: string
          ends_date: string
          id: string
          image: string
          is_important: boolean
          location: string
          starts_date: string
          title: string
          type: string
        }
        Insert: {
          created_at?: string
          ends_date: string
          id?: string
          image: string
          is_important: boolean
          location: string
          starts_date: string
          title: string
          type: string
        }
        Update: {
          created_at?: string
          ends_date?: string
          id?: string
          image?: string
          is_important?: boolean
          location?: string
          starts_date?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
      certificates: {
        Row: {
          created_at: string
          ext: string
          id: string
          name: string
          path: string
          size: number
          user_id: string
        }
        Insert: {
          created_at?: string
          ext: string
          id?: string
          name: string
          path: string
          size: number
          user_id: string
        }
        Update: {
          created_at?: string
          ext?: string
          id?: string
          name?: string
          path?: string
          size?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "certificates_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          achievments: string | null
          company: string
          duties: string | null
          end_date: string | null
          id: string
          position: string
          start_date: string
          user_id: string
        }
        Insert: {
          achievments?: string | null
          company: string
          duties?: string | null
          end_date?: string | null
          id?: string
          position: string
          start_date: string
          user_id: string
        }
        Update: {
          achievments?: string | null
          company?: string
          duties?: string | null
          end_date?: string | null
          id?: string
          position?: string
          start_date?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "jobs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      news: {
        Row: {
          id: string
          image: string
          text: string
          title: string
          type: string
        }
        Insert: {
          id?: string
          image: string
          text: string
          title: string
          type: string
        }
        Update: {
          id?: string
          image?: string
          text?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
      orgs: {
        Row: {
          arcea: string
          id: string
          psrn: string
          registration_date: string
          rrc: string
          status: Database["public"]["Enums"]["org_status"] | null
          terminated_date: string | null
          tin: string
          title: string
        }
        Insert: {
          arcea: string
          id?: string
          psrn: string
          registration_date: string
          rrc: string
          status?: Database["public"]["Enums"]["org_status"] | null
          terminated_date?: string | null
          tin: string
          title: string
        }
        Update: {
          arcea?: string
          id?: string
          psrn?: string
          registration_date?: string
          rrc?: string
          status?: Database["public"]["Enums"]["org_status"] | null
          terminated_date?: string | null
          tin?: string
          title?: string
        }
        Relationships: []
      }
      reels: {
        Row: {
          id: string
          image: string
          title: string
        }
        Insert: {
          id?: string
          image: string
          title: string
        }
        Update: {
          id?: string
          image?: string
          title?: string
        }
        Relationships: []
      }
      resumes: {
        Row: {
          created_at: string
          ext: string
          id: string
          name: string
          path: string
          size: number
          user_id: string
        }
        Insert: {
          created_at?: string
          ext: string
          id?: string
          name: string
          path: string
          size: number
          user_id: string
        }
        Update: {
          created_at?: string
          ext?: string
          id?: string
          name?: string
          path?: string
          size?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "resumes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          academy: string | null
          avatar: string
          city: string
          country: string
          created_at: string
          date_of_birth: string
          degree: string
          education_mode: Database["public"]["Enums"]["education_mode"] | null
          email: string
          field_of_study: string
          first_name: string
          id: string
          last_name: string
          middle_name: string
          phone: string
          position: string | null
          specialization: string
          study_mode: Database["public"]["Enums"]["study_mode"] | null
        }
        Insert: {
          academy?: string | null
          avatar: string
          city: string
          country: string
          created_at?: string
          date_of_birth: string
          degree: string
          education_mode?: Database["public"]["Enums"]["education_mode"] | null
          email: string
          field_of_study: string
          first_name: string
          id: string
          last_name: string
          middle_name: string
          phone: string
          position?: string | null
          specialization: string
          study_mode?: Database["public"]["Enums"]["study_mode"] | null
        }
        Update: {
          academy?: string | null
          avatar?: string
          city?: string
          country?: string
          created_at?: string
          date_of_birth?: string
          degree?: string
          education_mode?: Database["public"]["Enums"]["education_mode"] | null
          email?: string
          field_of_study?: string
          first_name?: string
          id?: string
          last_name?: string
          middle_name?: string
          phone?: string
          position?: string | null
          specialization?: string
          study_mode?: Database["public"]["Enums"]["study_mode"] | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      education_mode: "Бюджетная основа" | "Платная основа"
      org_status: "Действующая" | "Ликвидирована"
      study_mode: "Очная форма" | "Заочная форма" | "Дуальная форма"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

