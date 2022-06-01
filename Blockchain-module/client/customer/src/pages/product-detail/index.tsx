import React from 'react'
import TimelineItemComponent from '../../components/common/timeline/item/timeline-item.component'
import TimelineComponent from '../../components/common/timeline/timeline.component'
import BasicInfoComponent from '../../components/product-detail/basic-info/basic-info.component'
import './style.scss'

function Index() {
  return (
    <div className="product-detail-wrapper">
        <BasicInfoComponent></BasicInfoComponent>
        <div className="timeline">
          <TimelineComponent>
            <TimelineItemComponent>
              <p>Tên giao dịch: thu mua sản phẩm nàng thơm</p>
              <p>Người mua:</p>
              <p>Người bán: </p>
              <p>Số lượng:</p>
            </TimelineItemComponent>
            <TimelineItemComponent>
              <p>Tên giao dịch: mua sản phẩm lúa vụ đông xuân</p>
              <p>Người mua:</p>
              <p>Người bán: </p>
              <p>Số lượng:</p>
            </TimelineItemComponent>
            <TimelineItemComponent>
              <p>Tên giao dịch: mua giống lúa vụ đông xuân</p>
              <p>Người mua:</p>
              <p>Người bán: </p>
              <p>Số lượng:</p>
            </TimelineItemComponent>
          </TimelineComponent>
        </div>
    </div>
  )
}

export default Index