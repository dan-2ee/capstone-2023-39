import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RequestGeoDto } from './dto/request/request-geo.dto';
import { RequestShortGeoDto } from './dto/request/request-shortgeo.dto';
import { RequestIpDto } from './dto/request/request-ip.dto';
import { GeoService } from './geo.service';

@ApiTags('Geo')
@Controller('geo')
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  @Get('/map')
  @ApiOperation({
    summary: '입력된 범위 내의 접근 내역 출력',
    description: '입력: 위도, 경도 범위 \n출력: 범위 안의 id들의 detail info',
  })
  getGeoInfo(@Body() requestGeoDto: RequestGeoDto) {
    return this.geoService.getGeoInfo(requestGeoDto);
  }

  @Get('/map_short')
  @ApiOperation({
    summary: '입력된 범위 내의 접근 내역 요약 출력',
    description: '입력: 위도, 경도 범위 \n출력: 범위 안의 id들의 detail info',
  })
  getShortGeoInfo(@Body() requestGeoDto: RequestShortGeoDto) {
    return this.geoService.getShortGeoInfo(requestGeoDto);
  }

  @Get('/detail')
  @ApiOperation({
    summary: '지정된 id의 접근내역 상세정보 출력',
    description: '입력: 특정 id \n출력: id의 detail info',
  })
  getDetailIpInfo(@Body() requestIpDto: RequestIpDto) {
    return this.geoService.getDetailIpInfo(requestIpDto);
  }
}
