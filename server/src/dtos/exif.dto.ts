import { ApiProperty } from '@nestjs/swagger';
import { Exif } from 'src/database';

export class ExifResponseDto {
  make?: string | null = null;
  model?: string | null = null;
  exifImageWidth?: number | null = null;
  exifImageHeight?: number | null = null;

  @ApiProperty({ type: 'integer', format: 'int64' })
  fileSizeInByte?: number | null = null;
  orientation?: string | null = null;
  dateTimeOriginal?: Date | null = null;
  modifyDate?: Date | null = null;
  timeZone?: string | null = null;
  lensModel?: string | null = null;
  fNumber?: number | null = null;
  focalLength?: number | null = null;
  iso?: number | null = null;
  exposureTime?: string | null = null;
  latitude?: number | null = null;
  longitude?: number | null = null;
  altitude?: number | null = null;
  direction?: number | null = null;
  yaw?: number | null = null;
  pitch?: number | null = null;
  roll?: number | null = null;
  city?: string | null = null;
  state?: string | null = null;
  country?: string | null = null;
  description?: string | null = null;
  projectionType?: string | null = null;
  rating?: number | null = null;
}

export function mapExif(entity: Exif): ExifResponseDto {
  return {
    make: entity.make,
    model: entity.model,
    exifImageWidth: entity.exifImageWidth,
    exifImageHeight: entity.exifImageHeight,
    fileSizeInByte: entity.fileSizeInByte ? Number.parseInt(entity.fileSizeInByte.toString()) : null,
    orientation: entity.orientation,
    dateTimeOriginal: entity.dateTimeOriginal,
    modifyDate: entity.modifyDate,
    timeZone: entity.timeZone,
    lensModel: entity.lensModel,
    fNumber: entity.fNumber,
    focalLength: entity.focalLength,
    iso: entity.iso,
    exposureTime: entity.exposureTime,
    latitude: entity.latitude,
    longitude: entity.longitude,
    altitude: entity.altitude,
    direction: entity.direction,
    yaw: entity.yaw,
    pitch: entity.pitch,
    roll: entity.roll,
    city: entity.city,
    state: entity.state,
    country: entity.country,
    description: entity.description,
    projectionType: entity.projectionType,
    rating: entity.rating,
  };
}

export function mapSanitizedExif(entity: Exif): ExifResponseDto {
  return {
    fileSizeInByte: entity.fileSizeInByte ? Number.parseInt(entity.fileSizeInByte.toString()) : null,
    orientation: entity.orientation,
    dateTimeOriginal: entity.dateTimeOriginal,
    timeZone: entity.timeZone,
    projectionType: entity.projectionType,
    exifImageWidth: entity.exifImageWidth,
    exifImageHeight: entity.exifImageHeight,
    rating: entity.rating,
  };
}
