// src/supabase.js
import { createClient } from '@supabase/supabase-js';

// .env 파일에서 환경 변수 읽기
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Supabase 클라이언트 생성
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;