import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Express } from 'express';
import { extname } from 'path';
import 'multer';

@Injectable()
export class FileUploadService {
  private supabase: SupabaseClient;
  private bucket = process.env.SUPABASE_BUCKET || 'talent-uploads';

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_KEY!
    );
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    try {
      // Generate a unique file name to prevent overwriting
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      const filename = `${uniqueSuffix}${ext}`;

      // Upload file buffer to Supabase Storage
      const { data, error } = await this.supabase.storage
        .from(this.bucket)
        .upload(filename, file.buffer, {
          contentType: file.mimetype,
          upsert: false,
        });

      if (error) {
        throw error;
      }

      // Retrieve the public URL
      const { data: publicUrlData } = this.supabase.storage
        .from(this.bucket)
        .getPublicUrl(data.path);

      return publicUrlData.publicUrl;
    } catch (error) {
      console.error('Supabase Upload Error:', error);
      throw new InternalServerErrorException('Failed to upload file to storage.');
    }
  }
}